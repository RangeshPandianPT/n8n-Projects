# Social Media Auto-Poster

## Overview
This is an exported n8n workflow for **Social Media Auto-Poster**.

## Nodes Included
- **RSS Feed Trigger** (n8n-nodes-base.rssFeedRead)
- **Ollama Chat Model** (@n8n/n8n-nodes-langchain.lmChatOllama)
- **AI Social Media Creator** (@n8n/n8n-nodes-langchain.agent)
- **Post to Twitter / X** (n8n-nodes-base.twitter)
- **Post to LinkedIn** (n8n-nodes-base.linkedIn)

## Workflow Diagram
```mermaid
graph TD;
  "RSS Feed Trigger" --> "AI Social Media Creator";
  "AI Social Media Creator" --> "Post to Twitter / X";
  "AI Social Media Creator" --> "Post to LinkedIn";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
