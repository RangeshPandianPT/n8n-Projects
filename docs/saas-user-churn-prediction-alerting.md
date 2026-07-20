# SaaS User Churn Prediction Alerting

## Overview
This is an exported n8n workflow for **SaaS User Churn Prediction Alerting**.

## Nodes Included
- **Schedule Trigger** (n8n-nodes-base.scheduleTrigger)
- **Postgres** (n8n-nodes-base.postgres)
- **OpenAI** (n8n-nodes-base.openAi)
- **Slack** (n8n-nodes-base.slack)

## Workflow Diagram
```mermaid
graph TD;
  "Schedule Trigger" --> "Postgres";
  "Postgres" --> "OpenAI";
  "OpenAI" --> "Slack";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
