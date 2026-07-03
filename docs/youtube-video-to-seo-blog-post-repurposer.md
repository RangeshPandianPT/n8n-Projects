# YouTube Video to SEO Blog Post Repurposer

## Overview
This is an exported n8n workflow for **YouTube Video to SEO Blog Post Repurposer**.

## Nodes Included
- **YouTube Trigger** (n8n-nodes-base.youTubeTrigger)
- **Fetch Transcript** (n8n-nodes-base.httpRequest)
- **OpenAI - Write Blog Post** (n8n-nodes-base.openAi)
- **WordPress - Draft Post** (n8n-nodes-base.wordpress)

## Workflow Diagram
```mermaid
graph TD;
  "YouTube Trigger" --> "Fetch Transcript";
  "Fetch Transcript" --> "OpenAI - Write Blog Post";
  "OpenAI - Write Blog Post" --> "WordPress - Draft Post";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
