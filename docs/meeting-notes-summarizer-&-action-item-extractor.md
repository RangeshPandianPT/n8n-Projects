# Meeting Notes Summarizer & Action Item Extractor

## Overview
This is an exported n8n workflow for **Meeting Notes Summarizer & Action Item Extractor**.

## Nodes Included
- **Google Drive Trigger** (n8n-nodes-base.googleDriveTrigger)
- **OpenAI - Summarize** (n8n-nodes-base.openAi)
- **Notion - Save Action Items** (n8n-nodes-base.notion)

## Workflow Diagram
```mermaid
graph TD;
  "Google Drive Trigger" --> "OpenAI - Summarize";
  "OpenAI - Summarize" --> "Notion - Save Action Items";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
