# Podcast to Social Media Snippets Generator

## Overview
This is an exported n8n workflow for **Podcast to Social Media Snippets Generator**.

## Nodes Included
- **Google Drive Trigger** (n8n-nodes-base.googleDriveTrigger)
- **OpenAI Whisper** (n8n-nodes-base.openAi)
- **OpenAI GPT-4** (n8n-nodes-base.openAi)
- **Buffer** (n8n-nodes-base.buffer)

## Workflow Diagram
```mermaid
graph TD;
  "Google Drive Trigger" --> "OpenAI Whisper";
  "OpenAI Whisper" --> "OpenAI GPT-4";
  "OpenAI GPT-4" --> "Buffer";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
