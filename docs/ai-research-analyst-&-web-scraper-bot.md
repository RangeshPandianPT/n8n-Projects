# AI Research Analyst & Web Scraper Bot

## Overview
This is an exported n8n workflow for **AI Research Analyst & Web Scraper Bot**.

## Nodes Included
- **Telegram Trigger** (n8n-nodes-base.telegramTrigger)
- **Perplexity Research API** (n8n-nodes-base.httpRequest)
- **OpenAI - Format Report** (n8n-nodes-base.openAi)
- **Notion - Save Report** (n8n-nodes-base.notion)
- **Telegram - Confirmation** (n8n-nodes-base.telegram)

## Workflow Diagram
```mermaid
graph TD;
  "Telegram Trigger" --> "Perplexity Research API";
  "Perplexity Research API" --> "OpenAI - Format Report";
  "OpenAI - Format Report" --> "Notion - Save Report";
  "Notion - Save Report" --> "Telegram - Confirmation";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
