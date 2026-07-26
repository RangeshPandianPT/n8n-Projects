# Automated Short-Form Video Script Generator

## Overview
This is an exported n8n workflow for **Automated Short-Form Video Script Generator**.

## Nodes Included
- **RSS - Trending Articles** (n8n-nodes-base.rssFeedRead)
- **OpenAI - Generate Script & Assets** (n8n-nodes-base.openAi)
- **DALL-E - Generate Thumbnail Preview** (n8n-nodes-base.openAi)
- **Google Drive - Save Script File** (n8n-nodes-base.googleDrive)
- **Slack - Production Notify** (n8n-nodes-base.slack)

## Workflow Diagram
```mermaid
graph TD;
  "RSS - Trending Articles" --> "OpenAI - Generate Script & Assets";
  "OpenAI - Generate Script & Assets" --> "DALL-E - Generate Thumbnail Preview";
  "DALL-E - Generate Thumbnail Preview" --> "Google Drive - Save Script File";
  "Google Drive - Save Script File" --> "Slack - Production Notify";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
