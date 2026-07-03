const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'Daily Fitness & Habit Tracker Bot.json');
const content = fs.readFileSync(filePath, 'utf8');
const workflow = JSON.parse(content);

// Add Cron Node
const cronNode = {
  "parameters": {
    "rule": {
      "interval": [
        {
          "field": "cronExpression",
          "expression": "0 20 * * *"
        }
      ]
    }
  },
  "name": "Cron (8 PM Reminder)",
  "type": "n8n-nodes-base.cron",
  "typeVersion": 1,
  "position": [250, 500]
};

const telegramReminderNode = {
  "parameters": {
    "chatId": "YOUR_CHAT_ID",
    "text": "Hey! It's 8 PM. Don't forget to log your habits and workout for today!"
  },
  "name": "Telegram - Send Reminder",
  "type": "n8n-nodes-base.telegram",
  "typeVersion": 1,
  "position": [450, 500]
};

// Check if already updated
if (!workflow.nodes.find(n => n.name === 'Cron (8 PM Reminder)')) {
  workflow.nodes.push(cronNode);
  workflow.nodes.push(telegramReminderNode);
  
  if (!workflow.connections['Cron (8 PM Reminder)']) {
    workflow.connections['Cron (8 PM Reminder)'] = {
      "main": [
        [
          {
            "node": "Telegram - Send Reminder",
            "type": "main",
            "index": 0
          }
        ]
      ]
    };
  }
  
  fs.writeFileSync(filePath, JSON.stringify(workflow, null, 2));
  console.log('Daily Fitness & Habit Tracker Bot updated with Cron reminder.');
} else {
  console.log('Daily Fitness & Habit Tracker Bot already has the Cron reminder.');
}
