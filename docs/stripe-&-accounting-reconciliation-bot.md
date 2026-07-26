# Stripe & Accounting Reconciliation Bot

## Overview
This is an exported n8n workflow for **Stripe & Accounting Reconciliation Bot**.

## Nodes Included
- **Stripe Webhook Trigger** (n8n-nodes-base.webhook)
- **IF - Is Charge Event** (n8n-nodes-base.if)
- **Normalize Data** (n8n-nodes-base.set)
- **Airtable - Log Transaction** (n8n-nodes-base.airtable)
- **Slack - Finance Alert** (n8n-nodes-base.slack)

## Workflow Diagram
```mermaid
graph TD;
  "Stripe Webhook Trigger" --> "IF - Is Charge Event";
  "IF - Is Charge Event" --> "Normalize Data";
  "Normalize Data" --> "Airtable - Log Transaction";
  "Airtable - Log Transaction" --> "Slack - Finance Alert";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
