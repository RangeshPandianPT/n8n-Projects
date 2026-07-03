const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.json') && file !== 'package.json');

let updatedCount = 0;

files.forEach(file => {
  try {
    const filePath = path.join(rootDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = JSON.parse(content);
    
    // Don't inject into the global error handler itself
    if (file !== 'Global Error Handler.json') {
      if (!workflow.settings) {
        workflow.settings = {};
      }
      workflow.settings.errorWorkflow = "YOUR_ERROR_WORKFLOW_ID";
      
      fs.writeFileSync(filePath, JSON.stringify(workflow, null, 2));
      updatedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${file}: ${err.message}`);
  }
});

console.log(`Successfully injected error handler into ${updatedCount} workflows.`);
