# Lead Generation & CRM Sync

## Overview
This is an exported n8n workflow for **Lead Generation & CRM Sync**.

## Nodes Included
- **Typeform Trigger** (n8n-nodes-base.typeformTrigger)
- **Clearbit** (n8n-nodes-base.clearbit)
- **HubSpot** (n8n-nodes-base.hubspot)

## Workflow Diagram
```mermaid
graph TD;
  "Typeform Trigger" --> "Clearbit";
  "Clearbit" --> "HubSpot";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
