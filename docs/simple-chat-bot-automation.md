# Simple chat bot automation

## Overview
This is an exported n8n workflow for **Simple chat bot automation**.

## Nodes Included
- **Ollama Chat Model** (@n8n/n8n-nodes-langchain.lmChatOllama)
- **Simple Memory** (@n8n/n8n-nodes-langchain.memoryBufferWindow)
- **When chat message received** (@n8n/n8n-nodes-langchain.chatTrigger)
- **AI Agent** (@n8n/n8n-nodes-langchain.agent)

## Workflow Diagram
```mermaid
graph TD;
  "When chat message received" --> "AI Agent";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
