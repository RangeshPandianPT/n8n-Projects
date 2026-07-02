# n8n Credentials Guide

This repository contains workflows that integrate with multiple third-party services. To run them successfully, you will need to set up the appropriate credentials in your n8n instance.

## Setting up Credentials

1. Open your n8n instance.
2. Navigate to the **Credentials** tab on the left sidebar.
3. Click **Add Credential** and search for the service.

## Commonly Used Services

* **OpenAI (ChatGPT):** Used for AI text generation, summaries, and sentiment analysis. Requires an `OPENAI_API_KEY`.
* **Telegram:** Used for bots and notifications. Requires a Bot Token from BotFather.
* **Slack / Discord:** Used for incident routing and notifications. Requires Bot Tokens or Webhook URLs.
* **GitHub:** Used for issue tracking and PR reviews. Requires a Personal Access Token.
* **Google Workspace (Docs, Sheets, Gmail):** Used for trackers, spreadsheets, and email outreach. Setup involves OAuth2 via Google Cloud Console.
* **Notion:** Used for knowledge bases and CRMs. Requires an Internal Integration Secret.

Check the `.env.example` file for standard environment variables if you are self-hosting n8n.
