# Automated Server Backup & Notification

## Overview
This is an exported n8n workflow for **Automated Server Backup & Notification**.

## Nodes Included
- **Schedule Trigger** (n8n-nodes-base.scheduleTrigger)
- **Execute Command** (n8n-nodes-base.executeCommand)
- **AWS S3** (n8n-nodes-base.awsS3)
- **Slack** (n8n-nodes-base.slack)

## Workflow Diagram
```mermaid
graph TD;
  "Schedule Trigger" --> "Execute Command";
  "Execute Command" --> "AWS S3";
  "AWS S3" --> "Slack";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
