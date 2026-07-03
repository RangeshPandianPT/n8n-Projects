# E-commerce Inventory Sync

## Overview
This is an exported n8n workflow for **E-commerce Inventory Sync**.

## Nodes Included
- **Shopify Trigger** (n8n-nodes-base.shopifyTrigger)
- **Update Airtable** (n8n-nodes-base.airtable)

## Workflow Diagram
```mermaid
graph TD;
  "Shopify Trigger" --> "Update Airtable";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
