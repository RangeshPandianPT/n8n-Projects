# GitHub Release & Changelog Automator

## Overview
This is an exported n8n workflow for **GitHub Release & Changelog Automator**.

## Nodes Included
- **GitHub Release Webhook** (n8n-nodes-base.githubTrigger)
- **OpenAI - Summarize Changelog** (n8n-nodes-base.openAi)
- **Discord - Community Announcement** (n8n-nodes-base.discord)
- **Email - Newsletter Broadcast** (n8n-nodes-base.sendEmail)

## Workflow Diagram
```mermaid
graph TD;
  "GitHub Release Webhook" --> "OpenAI - Summarize Changelog";
  "OpenAI - Summarize Changelog" --> "Discord - Community Announcement";
  "OpenAI - Summarize Changelog" --> "Email - Newsletter Broadcast";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
