# Crypto Price Alert Bot

## Overview
This is an exported n8n workflow for **Crypto Price Alert Bot**.

## Nodes Included
- **Schedule Trigger** (n8n-nodes-base.scheduleTrigger)
- **HTTP Request** (n8n-nodes-base.httpRequest)
- **If** (n8n-nodes-base.if)
- **Telegram** (n8n-nodes-base.telegram)

## Workflow Diagram
```mermaid
graph TD;
  "Schedule Trigger" --> "HTTP Request";
  "HTTP Request" --> "If";
  "If" --> "Telegram";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
