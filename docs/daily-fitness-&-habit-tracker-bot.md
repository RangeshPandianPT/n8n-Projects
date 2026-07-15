# Daily Fitness & Habit Tracker Bot

## Overview
This is an exported n8n workflow for **Daily Fitness & Habit Tracker Bot**.

## Nodes Included
- **Telegram Trigger** (n8n-nodes-base.telegramTrigger)
- **Switch - Text or Photo** (n8n-nodes-base.switch)
- **OpenAI - Parse Habits** (n8n-nodes-base.openAi)
- **OpenAI Vision - Parse Photo** (n8n-nodes-base.openAi)
- **Code - Parse JSON** (n8n-nodes-base.code)
- **Google Sheets - Log Data** (n8n-nodes-base.googleSheets)
- **Telegram - Send Confirmation** (n8n-nodes-base.telegram)
- **Cron (8 PM Reminder)** (n8n-nodes-base.cron)
- **Telegram - Send Reminder** (n8n-nodes-base.telegram)

## Workflow Diagram
```mermaid
graph TD;
  "Telegram Trigger" --> "Switch - Text or Photo";
  "Switch - Text or Photo" --> "OpenAI Vision - Parse Photo";
  "Switch - Text or Photo" --> "OpenAI - Parse Habits";
  "OpenAI - Parse Habits" --> "Code - Parse JSON";
  "OpenAI Vision - Parse Photo" --> "Code - Parse JSON";
  "Code - Parse JSON" --> "Google Sheets - Log Data";
  "Google Sheets - Log Data" --> "Telegram - Send Confirmation";
  "Cron (8 PM Reminder)" --> "Telegram - Send Reminder";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
