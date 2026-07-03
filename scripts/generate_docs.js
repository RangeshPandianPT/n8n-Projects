const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.json') && file !== 'package.json');

files.forEach(file => {
  try {
    const filePath = path.join(rootDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);
    
    let nodesList = [];
    if (workflow.nodes && Array.isArray(workflow.nodes)) {
      nodesList = workflow.nodes.map(n => `- **${n.name}** (${n.type})`);
    } else {
      nodesList.push('- No nodes found or invalid structure.');
    }

    // Generate Mermaid Diagram
    let mermaidLines = ['```mermaid', 'graph TD;'];
    let hasConnections = false;
    
    if (workflow.connections) {
      for (const [sourceNode, connectionData] of Object.entries(workflow.connections)) {
        if (connectionData.main && Array.isArray(connectionData.main)) {
          connectionData.main.forEach((outputConnections) => {
            if (Array.isArray(outputConnections)) {
              outputConnections.forEach(target => {
                // escape quotes in node names
                const source = sourceNode.replace(/"/g, "'");
                const dest = target.node.replace(/"/g, "'");
                mermaidLines.push(`  "${source}" --> "${dest}";`);
                hasConnections = true;
              });
            }
          });
        }
      }
    }
    
    if (!hasConnections) {
      mermaidLines.push('  A[No connections found] --> B[Check Workflow];');
    }
    mermaidLines.push('```');

    const title = file.replace('.json', '');
    
    const markdown = `# ${title}

## Overview
This is an exported n8n workflow for **${title}**.

## Nodes Included
${nodesList.join('\n')}

## Workflow Diagram
${mermaidLines.join('\n')}

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
`;
    
    const docPath = path.join(docsDir, `${title.replace(/\s+/g, '-').toLowerCase()}.md`);
    fs.writeFileSync(docPath, markdown);
    console.log(`Generated docs for ${file}`);
  } catch (err) {
    console.error(`Error processing ${file}: ${err.message}`);
  }
});

console.log('Documentation generation complete.');
