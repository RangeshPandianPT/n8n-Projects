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
