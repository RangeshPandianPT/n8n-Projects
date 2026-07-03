# Smart Bookmarking & Reading List Categorizer

## Overview
This is an exported n8n workflow for **Smart Bookmarking & Reading List Categorizer**.

## Nodes Included
- **Telegram Trigger** (n8n-nodes-base.telegramTrigger)
- **Scrape URL** (n8n-nodes-base.httpRequest)
- **HTML Extract** (n8n-nodes-base.htmlExtract)
- **OpenAI - Categorize** (n8n-nodes-base.openAi)
- **Notion - Save Bookmark** (n8n-nodes-base.notion)

## Workflow Diagram
```mermaid
graph TD;
  "Telegram Trigger" --> "Scrape URL";
  "Scrape URL" --> "HTML Extract";
  "HTML Extract" --> "OpenAI - Categorize";
  "OpenAI - Categorize" --> "Notion - Save Bookmark";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
