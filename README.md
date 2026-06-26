# n8n-Projects

A curated collection of **n8n automation workflows** designed to streamline real world tasks such as LinkedIn content creation, HR recruitment automation, chatbot interactions, and AI powered personal assistance.
# n8n-Projects

This repository contains a collection of n8n workflows for various automation tasks.

## Workflows

### AI Powered Telegram Personal Assistant
- **File:** `AI Powered Telegram Personal Assistant.json`
- **Description:** This workflow creates a personal assistant on Telegram that can interact with Google Calendar, Gmail, and Baserow to manage tasks and contacts. It can understand natural language queries and respond with relevant information. It can also handle voice messages by transcribing them to text.

### Automate LinkedIn post creation
- **File:** `Automate LinkedIn post creation.json`
- **Description:** This workflow automates the creation of LinkedIn posts. It uses Google Gemini to generate content topics, create post content, and generate relevant hashtags. It also uses DALL-E to generate images for the posts. The workflow is scheduled to run at regular intervals.

### HR Recruiting Automation
- **File:** `HR Recruiting Automation.json`
- **Description:** This workflow automates the HR recruiting process. It receives candidate data through a webhook, filters and scores candidates based on a required tech stack, and shortlists them. The shortlisted candidates are then added to a Google Sheet.

### Simple chat bot automation
- **File:** `Simple chat bot automation.json`
- **Description:** This is a simple chatbot that uses an AI agent to respond to user messages. It can be used as a starting point for building more complex chatbots.

### Social Media Auto-Poster
- **File:** `Social Media Auto-Poster.json`
- **Description:** This workflow automatically creates and posts social media content to Twitter and LinkedIn. It fetches articles from an RSS feed, uses an AI to generate a Twitter thread and a LinkedIn post, and then posts them.

### Daily News Briefing
- **File:** `Daily News Briefing.json`
- **Description:** This workflow fetches the top news stories from the BBC News RSS feed and sends them to you in an email.

### E-commerce Order Notification
- **File:** `E-commerce Order Notification.json`
- **Description:** This workflow listens for new e-commerce orders via a webhook and sends a notification to a Slack channel.

### Social Media Auto-Poster (with Approval)
- **File:** `Social Media Auto-Poster (with Approval).json`
- **Description:** An enhanced version of the Social Media Auto-Poster that adds a Slack "human-in-the-loop" approval step before posting to Twitter and LinkedIn.

### Customer Support Ticket Triage
- **File:** `Customer Support Ticket Triage.json`
- **Description:** A workflow that monitors a support inbox webhook, uses an LLM to categorize the intent (Billing, Technical, General), and routes it to the correct Slack channel.

### Global Error Handler
- **File:** `Global Error Handler.json`
- **Description:** A universal error-handling workflow that catches failures across any of your main workflows and alerts you immediately via Telegram.

### Crypto Price Alert Bot
- **File:** `Crypto Price Alert Bot.json`
- **Description:** Periodically checks cryptocurrency prices and sends a Telegram alert if there's a significant drop or spike.

### GitHub PR Reviewer
- **File:** `GitHub PR Reviewer.json`
- **Description:** Automatically reviews new GitHub Pull Requests using an LLM and posts the review comments directly on the PR.

### Personal Finance Tracker
- **File:** `Personal Finance Tracker.json`
- **Description:** Monitors your Gmail for bank transaction emails, uses AI to extract vendor, amount, and category, and logs it into a Google Sheet.

### Automated Invoice Generator & Sender
- **File:** `Automated Invoice Generator & Sender.json`
- **Description:** Triggers when a deal is closed or a row is added, generates a PDF invoice, and emails it to the client.

### Meeting Notes Summarizer & Action Item Extractor
- **File:** `Meeting Notes Summarizer & Action Item Extractor.json`
- **Description:** Monitors a Google Drive folder for meeting notes, uses an LLM to summarize and extract action items, and saves them to Notion.

### YouTube Video to SEO Blog Post Repurposer
- **File:** `YouTube Video to SEO Blog Post Repurposer.json`
- **Description:** Fetches a new YouTube video transcript, uses an LLM to rewrite it into an SEO optimized blog post, and drafts it in WordPress.

### Cold Email Outreach Automator
- **File:** `Cold Email Outreach Automator.json`
- **Description:** Reads leads from Google Sheets, uses an LLM to generate highly personalized cold emails, and sends them via Gmail.

### Daily Fitness & Habit Tracker Bot
- **File:** `Daily Fitness & Habit Tracker Bot.json`
- **Description:** A Telegram bot that tracks your daily habits using natural language processing via an LLM and logs the data to a spreadsheet.

### Smart Bookmarking & Reading List Categorizer
- **File:** `Smart Bookmarking & Reading List Categorizer.json`
- **Description:** Receives a link via Telegram, scrapes the article content, categorizes and summarizes it using an LLM, and saves it to a Notion database.

### Website Uptime & Health Monitor
- **File:** `Website Uptime & Health Monitor.json`
- **Description:** Regularly pings specific websites and sends an alert to a Discord or Slack channel if a site goes down or returns a non-200 status code.

### DevOps Incident Alert Routing
- **File:** `DevOps Incident Alert Routing.json`
- **Description:** Receives high severity incident webhooks from DevOps tools and routes critical alerts to a dedicated Slack channel.

### E-commerce Inventory Sync
- **File:** `E-commerce Inventory Sync.json`
- **Description:** Triggers when a Shopify product goes out of stock and automatically updates an Airtable inventory database.

### Lead Generation & CRM Sync
- **File:** `Lead Generation & CRM Sync.json`
- **Description:** Takes leads from a Typeform submission, enriches the data using Clearbit, and pushes the contact into HubSpot.

### Expense Receipt OCR & Accounting Sync
- **File:** `Expense Receipt OCR & Accounting Sync.json`
- **Description:** Send a photo of a receipt to Telegram, extract merchant, date, amount, and tax using AI OCR, and log the data to Google Sheets.

### Automated User Onboarding Drip Campaign
- **File:** `Automated User Onboarding Drip Campaign.json`
- **Description:** Sends a sequence of personalized onboarding emails via Gmail triggered by a webhook (e.g., new user signup), incorporating time delays between messages.

### Competitor Website & Pricing Monitor
- **File:** `Competitor Website & Pricing Monitor.json`
- **Description:** Scrapes a competitor's pricing page daily, compares it against previously saved data, and sends a Slack alert if any changes are detected.

### GitHub Issue to Project Management Sync
- **File:** `GitHub Issue to Project Management Sync.json`
- **Description:** Automatically creates tasks in Notion, Trello, or Jira whenever a new issue is opened in a GitHub repository, and alerts developers via Slack.

## 📂 Repository Structure

Each file in this repository represents an independent n8n workflow exported in JSON format.

* **AI Powered Telegram Personal Assistant.json**
  An AI driven Telegram bot that responds to user queries, manages tasks, and provides intelligent assistance using external APIs or LLM services.

* **Automate LinkedIn post creation.json**
  A workflow that automatically generates and posts LinkedIn content. Useful for personal branding, marketing automation, and consistent social media engagement.

* **HR Recruiting Automation.json**
  Automates HR processes such as candidate data collection, screening triggers, notifications, and workflow based decision routing.

* **Simple chat bot automation.json**
  A lightweight chatbot workflow demonstrating basic conversational automation and webhook based interactions.

* **Social Media Auto-Poster (with Approval).json**
  Enhanced auto-poster with a Slack approval gateway.

* **Customer Support Ticket Triage.json**
  AI-driven categorization and routing for incoming customer support tickets.

* **Global Error Handler.json**
  Centralized error reporting workflow triggered by failures in other workflows.

* **Crypto Price Alert Bot.json**
  Checks crypto prices and sends alerts to Telegram.

* **GitHub PR Reviewer.json**
  An automated code reviewer for GitHub Pull Requests.

* **Personal Finance Tracker.json**
  Automates personal finance tracking from email receipts to Google Sheets.

* **Automated Invoice Generator & Sender.json**
  Generates and emails PDF invoices based on webhooks.

* **Meeting Notes Summarizer & Action Item Extractor.json**
  Uses AI to summarize meetings and extract tasks into Notion.

* **YouTube Video to SEO Blog Post Repurposer.json**
  Converts video transcripts to WordPress blog posts using AI.

* **Cold Email Outreach Automator.json**
  Sends personalized emails using data from Google Sheets and AI.

* **Daily Fitness & Habit Tracker Bot.json**
  A Telegram bot that logs habits into Google Sheets based on natural language.

* **Smart Bookmarking & Reading List Categorizer.json**
  Scrapes, categorizes, and saves web articles to Notion via Telegram.

* **Website Uptime & Health Monitor.json**
  Pings a website every 5 minutes and sends Discord alerts on failure.

* **DevOps Incident Alert Routing.json**
  Routes high-severity incidents to Slack.

* **E-commerce Inventory Sync.json**
  Syncs Shopify inventory updates to Airtable.

* **Lead Generation & CRM Sync.json**
  Enriches Typeform leads via Clearbit and syncs to HubSpot.

* **Expense Receipt OCR & Accounting Sync.json**
  Uses AI OCR to extract data from receipt images and log to Google Sheets.

* **Automated User Onboarding Drip Campaign.json**
  Sends an automated sequence of welcome and pro-tips emails to new users.

* **Competitor Website & Pricing Monitor.json**
  Scrapes pricing pages and sends alerts on changes.

* **GitHub Issue to Project Management Sync.json**
  Syncs new GitHub issues to Notion/Jira boards automatically.

## 🛠️ Tech Stack

* n8n (Workflow Automation)
* REST APIs
* Webhooks
* AI and LLM integrations
* Telegram Bot API
* Social Media Automation

## 🚀 How to Use

1. Install and set up **n8n** locally or using n8n Cloud.
2. Open the n8n editor.
3. Import any `.json` workflow from this repository.
4. Configure required credentials such as API keys, tokens, and webhooks.
5. Activate the workflow and test the automation.

## 🎯 Use Cases

* Social media automation for LinkedIn
* AI powered personal assistants
* HR and recruitment process automation
* Chatbot development
* No code and low code workflow design

## 📌 Notes

* Ensure all API credentials are securely stored using n8n credentials manager.
* Some workflows may require third party services such as OpenAI, Telegram, or LinkedIn APIs.
* Modify nodes as needed to fit your specific use case.

## 🤝 Contributions

Contributions, improvements, and new workflow ideas are welcome.
Feel free to fork this repository and submit a pull request.

## 📄 License

This repository is open source and available for learning, experimentation, and personal projects.

---


<<END OF THE MAIN ANSWER>>
