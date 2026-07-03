# Automated Lead Enrichment Pipeline

## Overview
This is an exported n8n workflow for **Automated Lead Enrichment Pipeline**.

## Nodes Included
- **Webhook (Lead Data)** (n8n-nodes-base.webhook)
- **Clearbit Enrichment** (n8n-nodes-base.httpRequest)
- **OpenAI (Icebreaker)** (n8n-nodes-base.openAi)
- **HubSpot Sync** (n8n-nodes-base.hubspot)

## Workflow Diagram
```mermaid
graph TD;
  "Webhook (Lead Data)" --> "Clearbit Enrichment";
  "Clearbit Enrichment" --> "OpenAI (Icebreaker)";
  "OpenAI (Icebreaker)" --> "HubSpot Sync";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
