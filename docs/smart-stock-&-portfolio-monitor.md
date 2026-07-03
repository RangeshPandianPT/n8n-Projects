# Smart Stock & Portfolio Monitor

## Overview
This is an exported n8n workflow for **Smart Stock & Portfolio Monitor**.

## Nodes Included
- **Schedule** (n8n-nodes-base.scheduleTrigger)
- **Alpha Vantage API** (n8n-nodes-base.httpRequest)
- **Telegram** (n8n-nodes-base.telegram)

## Workflow Diagram
```mermaid
graph TD;
  "Schedule" --> "Alpha Vantage API";
  "Alpha Vantage API" --> "Telegram";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
