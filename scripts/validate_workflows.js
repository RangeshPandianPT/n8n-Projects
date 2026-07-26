const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.json') && file !== 'package.json');

let totalFiles = 0;
let errorCount = 0;
let warningCount = 0;

console.log('🔍 Starting n8n Workflow Validation...\n');

files.forEach(file => {
  totalFiles++;
  const filePath = path.join(rootDir, file);
  let workflow;

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    workflow = JSON.parse(content);
  } catch (err) {
    console.error(`❌ [ERROR] ${file}: Invalid JSON syntax - ${err.message}`);
    errorCount++;
    return;
  }

  // 1. Check nodes exist
  if (!workflow.nodes || !Array.isArray(workflow.nodes) || workflow.nodes.length === 0) {
    console.error(`❌ [ERROR] ${file}: Workflow has no nodes or invalid nodes structure.`);
    errorCount++;
  }

  // 2. Check errorWorkflow setting (skip for Global Error Handler itself)
  if (file !== 'Global Error Handler.json') {
    if (!workflow.settings || !workflow.settings.errorWorkflow || workflow.settings.errorWorkflow === "") {
      console.warn(`⚠️  [WARNING] ${file}: Missing 'errorWorkflow' setting in workflow settings.`);
      warningCount++;
    }
  }

  // 3. Check for potential hardcoded secrets
  const jsonStr = JSON.stringify(workflow);
  const suspiciousPatterns = [
    /sk-[a-zA-Z0-9]{20,}/g,           // OpenAI key
    /xoxb-[a-zA-Z0-9-]{20,}/g,         // Slack token
    /ghp_[a-zA-Z0-9]{30,}/g,           // GitHub token
    /secret_[a-zA-Z0-9]{25,}/g         // Notion key
  ];

  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(jsonStr)) {
      console.warn(`⚠️  [WARNING] ${file}: Potential hardcoded secret detected matching pattern ${pattern}. Please use environment variables (e.g., ={{ $env.SECRET_KEY }}).`);
      warningCount++;
    }
  });
});

console.log('\n========================================');
console.log(`📊 Validation Summary:`);
console.log(`• Total Workflows Audited: ${totalFiles}`);
console.log(`• Errors Found: ${errorCount}`);
console.log(`• Warnings Found: ${warningCount}`);
console.log('========================================');

if (errorCount > 0) {
  console.error('\n❌ Workflow validation failed with errors.');
  process.exit(1);
} else {
  console.log('\n✅ All workflows passed validation!');
  process.exit(0);
}
