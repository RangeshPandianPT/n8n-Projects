# Expense Receipt OCR & Accounting Sync

## Overview
This is an exported n8n workflow for **Expense Receipt OCR & Accounting Sync**.

## Nodes Included
- **Telegram Trigger** (n8n-nodes-base.telegramTrigger)
- **If photo exists** (n8n-nodes-base.if)
- **Download Photo** (n8n-nodes-base.telegram)
- **OpenAI Vision OCR** (n8n-nodes-base.openAi)
- **Google Sheets** (n8n-nodes-base.googleSheets)
- **Telegram Reply** (n8n-nodes-base.telegram)

## Workflow Diagram
```mermaid
graph TD;
  "Telegram Trigger" --> "If photo exists";
  "If photo exists" --> "Download Photo";
  "Download Photo" --> "OpenAI Vision OCR";
  "OpenAI Vision OCR" --> "Google Sheets";
  "Google Sheets" --> "Telegram Reply";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
