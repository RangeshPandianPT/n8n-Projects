# HR Recruiting Automation

## Overview
This is an exported n8n workflow for **HR Recruiting Automation**.

## Nodes Included
- **Webhook Trigger** (n8n-nodes-base.webhook)
- **Workflow Configuration** (n8n-nodes-base.set)
- **Candidate Analyzer Agent** (@n8n/n8n-nodes-langchain.agent)
- **Structured Output Parser** (@n8n/n8n-nodes-langchain.outputParserStructured)
- **Respond to Webhook** (n8n-nodes-base.respondToWebhook)
- **Check if Shortlisted** (n8n-nodes-base.if)
- **Format for Excel** (n8n-nodes-base.set)
- **Ollama Chat Model1** (@n8n/n8n-nodes-langchain.lmChatOllama)
- **Simple Memory** (@n8n/n8n-nodes-langchain.memoryBufferWindow)
- **Append or update row in sheet** (n8n-nodes-base.googleSheets)

## Workflow Diagram
```mermaid
graph TD;
  "Webhook Trigger" --> "Workflow Configuration";
  "Workflow Configuration" --> "Candidate Analyzer Agent";
  "Candidate Analyzer Agent" --> "Check if Shortlisted";
  "Check if Shortlisted" --> "Format for Excel";
  "Check if Shortlisted" --> "Respond to Webhook";
  "Format for Excel" --> "Append or update row in sheet";
  "Append or update row in sheet" --> "Respond to Webhook";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
