# Automated User Onboarding Drip Campaign

## Overview
This is an exported n8n workflow for **Automated User Onboarding Drip Campaign**.

## Nodes Included
- **Stripe / App Webhook** (n8n-nodes-base.webhook)
- **Send Welcome Email** (n8n-nodes-base.gmail)
- **Wait 2 Days** (n8n-nodes-base.wait)
- **Send Pro Tips Email** (n8n-nodes-base.gmail)
- **Wait 5 Days** (n8n-nodes-base.wait)
- **Send Feedback Email** (n8n-nodes-base.gmail)

## Workflow Diagram
```mermaid
graph TD;
  "Stripe / App Webhook" --> "Send Welcome Email";
  "Send Welcome Email" --> "Wait 2 Days";
  "Wait 2 Days" --> "Send Pro Tips Email";
  "Send Pro Tips Email" --> "Wait 5 Days";
  "Wait 5 Days" --> "Send Feedback Email";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
