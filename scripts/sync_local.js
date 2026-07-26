const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration from environment or defaults
const N8N_HOST = process.env.N8N_HOST || 'localhost';
const N8N_PORT = process.env.N8N_PORT || '5678';
const N8N_PROTOCOL = process.env.N8N_PROTOCOL || 'http';
const N8N_API_KEY = process.env.N8N_API_KEY || '';

const rootDir = path.join(__dirname, '..');
const mode = process.argv[2] || 'help';

if (!['push', 'pull'].includes(mode)) {
  console.log(`
🔄 n8n Local Sync Utility

Usage:
  node scripts/sync_local.js push    # Push all local JSON workflows to your n8n instance
  node scripts/sync_local.js pull    # Pull all workflows from your n8n instance and save locally

Environment Variables:
  N8N_HOST      (default: localhost)
  N8N_PORT      (default: 5678)
  N8N_PROTOCOL  (default: http)
  N8N_API_KEY   (Required for authentication)
`);
  process.exit(0);
}

if (!N8N_API_KEY && mode !== 'help') {
  console.warn('⚠️  Warning: N8N_API_KEY environment variable is not set. Requests may fail if authentication is required.');
}

const client = N8N_PROTOCOL === 'https' ? https : http;

function makeRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: N8N_HOST,
      port: N8N_PORT,
      path: `/api/v1/${endpoint}`,
      method: method,
      headers: {
        'Accept': 'application/json',
        'X-N8N-API-KEY': N8N_API_KEY
      }
    };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
    }

    const req = client.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(body || '{}'));
          } catch (e) {
            resolve(body);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', err => reject(err));
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function runPush() {
  console.log(`⬆️  Pushing local workflows to ${N8N_PROTOCOL}://${N8N_HOST}:${N8N_PORT}...`);
  const files = fs.readdirSync(rootDir).filter(file => file.endsWith('.json') && file !== 'package.json');
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
      const workflow = JSON.parse(content);
      const res = await makeRequest('POST', 'workflows', {
        name: workflow.name || file.replace('.json', ''),
        nodes: workflow.nodes || [],
        connections: workflow.connections || {},
        settings: workflow.settings || {}
      });
      console.log(`✅ Pushed: ${file} -> (ID: ${res.id || 'Created'})`);
    } catch (err) {
      console.error(`❌ Failed to push ${file}: ${err.message}`);
    }
  }
}

async function runPull() {
  console.log(`⬇️  Pulling remote workflows from ${N8N_PROTOCOL}://${N8N_HOST}:${N8N_PORT}...`);
  try {
    const res = await makeRequest('GET', 'workflows');
    const workflows = res.data || [];
    console.log(`Found ${workflows.length} workflows on remote instance.`);

    for (const wf of workflows) {
      const fileName = `${wf.name.replace(/[<>:"/\\|?*]/g, '_')}.json`;
      const filePath = path.join(rootDir, fileName);
      fs.writeFileSync(filePath, JSON.stringify(wf, null, 2));
      console.log(`✅ Saved: ${fileName}`);
    }
  } catch (err) {
    console.error(`❌ Failed to pull workflows: ${err.message}`);
  }
}

if (mode === 'push') runPush();
if (mode === 'pull') runPull();
