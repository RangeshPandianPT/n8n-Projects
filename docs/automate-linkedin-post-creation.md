# Automate LinkedIn post creation

## Overview
This is an exported n8n workflow for **Automate LinkedIn post creation**.

## Nodes Included
- **Schedule Trigger1** (n8n-nodes-base.scheduleTrigger)
- **Google Gemini Chat Model1** (@n8n/n8n-nodes-langchain.lmChatGoogleGemini)
- **Structured Output Parser6** (@n8n/n8n-nodes-langchain.outputParserStructured)
- **Google Gemini Chat Model2** (@n8n/n8n-nodes-langchain.lmChatGoogleGemini)
- **Structured Output Parser7** (@n8n/n8n-nodes-langchain.outputParserStructured)
- **Content Topic Generator** (@n8n/n8n-nodes-langchain.agent)
- **Content Creator** (@n8n/n8n-nodes-langchain.chainLlm)
- **Google Gemini Chat Model3** (@n8n/n8n-nodes-langchain.lmChatGoogleGemini)
- **Structured Output Parser3** (@n8n/n8n-nodes-langchain.outputParserStructured)
- **Create a post** (n8n-nodes-base.linkedIn)
- **Merge** (n8n-nodes-base.merge)
- **Hashtag Generator / SEO** (@n8n/n8n-nodes-langchain.agent)
- **Generate an image** (@n8n/n8n-nodes-langchain.openAi)
- **Sticky Note** (n8n-nodes-base.stickyNote)
- **Sticky Note1** (n8n-nodes-base.stickyNote)
- **Set Before Starting** (n8n-nodes-base.set)
- **Sticky Note6** (n8n-nodes-base.stickyNote)
- **Sticky Note2** (n8n-nodes-base.stickyNote)
- **Sticky Note3** (n8n-nodes-base.stickyNote)
- **Sticky Note4** (n8n-nodes-base.stickyNote)
- **Sticky Note9** (n8n-nodes-base.stickyNote)

## Workflow Diagram
```mermaid
graph TD;
  "Merge" --> "Create a post";
  "Content Creator" --> "Hashtag Generator / SEO";
  "Content Creator" --> "Generate an image";
  "Generate an image" --> "Merge";
  "Schedule Trigger1" --> "Set Before Starting";
  "Set Before Starting" --> "Content Topic Generator";
  "Content Topic Generator" --> "Content Creator";
  "Hashtag Generator / SEO" --> "Merge";
```

## Setup Instructions
1. Import this workflow into your n8n instance.
2. Review the nodes and configure necessary credentials.
3. Activate the workflow.
