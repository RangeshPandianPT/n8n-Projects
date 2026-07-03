# Website Uptime & Health Monitor

## Overview
This is an exported n8n workflow for **Website Uptime & Health Monitor**.

## Nodes Included
- **Schedule Trigger** (n8n-nodes-base.scheduleTrigger)
- **Ping Website** (n8n-nodes-base.httpRequest)
- **IF - Status != 200** (n8n-nodes-base.if)
- **Discord - Send Alert** (n8n-nodes-base.discord)

## Workflow Diagram
```mermaid
graph TD;
  "Schedule Trigger" --> "Ping Website";
  "Ping Website" --> "IF - Status != 200";
  "IF - Status != 200" --> "Discord - Send Alert";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
