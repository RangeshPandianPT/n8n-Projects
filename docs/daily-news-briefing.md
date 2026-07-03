# Daily News Briefing

## Overview
This is an exported n8n workflow for **Daily News Briefing**.

## Nodes Included
- **RSS Feed Trigger** (n8n-nodes-base.rssFeedRead)
- **Format Email** (n8n-nodes-base.set)
- **Send Email** (n8n-nodes-base.sendEmail)

## Workflow Diagram
```mermaid
graph TD;
  "RSS Feed Trigger" --> "Format Email";
  "Format Email" --> "Send Email";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
