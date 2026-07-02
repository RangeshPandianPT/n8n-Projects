# Competitor Website & Pricing Monitor

## Overview
This is an exported n8n workflow for **Competitor Website & Pricing Monitor**.

## Nodes Included
- **Daily Schedule** (n8n-nodes-base.scheduleTrigger)
- **Scrape Pricing Page** (n8n-nodes-base.httpRequest)
- **HTML Extract** (n8n-nodes-base.html)
- **Get Previous Price** (n8n-nodes-base.googleSheets)
- **If Pricing Changed** (n8n-nodes-base.if)
- **Update Saved Price** (n8n-nodes-base.googleSheets)
- **Slack Alert** (n8n-nodes-base.slack)

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
