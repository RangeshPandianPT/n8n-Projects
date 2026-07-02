# Customer Support Ticket Triage

## Overview
This is an exported n8n workflow for **Customer Support Ticket Triage**.

## Nodes Included
- **Webhook Trigger** (n8n-nodes-base.webhook)
- **Ollama Chat Model** (@n8n/n8n-nodes-langchain.lmChatOllama)
- **Ticket Classifier Agent** (@n8n/n8n-nodes-langchain.agent)
- **Route by Category** (n8n-nodes-base.switch)
- **Slack (Billing)** (n8n-nodes-base.slack)
- **Slack (Tech)** (n8n-nodes-base.slack)
- **Slack (General)** (n8n-nodes-base.slack)

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
