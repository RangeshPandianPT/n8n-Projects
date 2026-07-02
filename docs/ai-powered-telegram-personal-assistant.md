# AI Powered Telegram Personal Assistant

## Overview
This is an exported n8n workflow for **AI Powered Telegram Personal Assistant**.

## Nodes Included
- **Google Calendar** (n8n-nodes-base.googleCalendarTool)
- **Window Buffer Memory** (@n8n/n8n-nodes-langchain.memoryBufferWindow)
- **Get Email** (n8n-nodes-base.gmailTool)
- **Listen for incoming events** (n8n-nodes-base.telegramTrigger)
- **Telegram** (n8n-nodes-base.telegram)
- **If** (n8n-nodes-base.if)
- **Voice or Text** (n8n-nodes-base.set)
- **Get Voice File** (n8n-nodes-base.telegram)
- **Angie, AI Assistant 👩🏻‍🏫** (@n8n/n8n-nodes-langchain.agent)
- **Sticky Note** (n8n-nodes-base.stickyNote)
- **Tasks** (n8n-nodes-base.baserowTool)
- **Contacts** (n8n-nodes-base.baserowTool)
- **Ollama Chat Model** (@n8n/n8n-nodes-langchain.lmChatOllama)
- **Speech to Text** (@n8n/n8n-nodes-langchain.openAi)

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
