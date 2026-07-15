import os
import json
import glob

DIR = r'd:\Projects\n8n-Projects'
json_files = glob.glob(os.path.join(DIR, '*.json'))

replacements = {
    "YOUR_SHEET_ID": "={{ $env.GOOGLE_SHEET_ID }}",
    "YOUR_CHAT_ID": "={{ $env.TELEGRAM_CHAT_ID }}",
    "YOUR_ERROR_WORKFLOW_ID": "={{ $env.GLOBAL_ERROR_HANDLER_ID }}"
}

for filepath in json_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple string replacements
        for old_str, new_str in replacements.items():
            content = content.replace(old_str, new_str)
            
        data = json.loads(content)
        
        # Ensure settings exist
        if 'settings' not in data:
            data['settings'] = {}
            
        # Set error workflow
        if 'errorWorkflow' not in data['settings'] or data['settings']['errorWorkflow'] in ["YOUR_ERROR_WORKFLOW_ID", "={{ $env.GLOBAL_ERROR_HANDLER_ID }}", ""]:
            data['settings']['errorWorkflow'] = "={{ $env.GLOBAL_ERROR_HANDLER_ID }}"
            
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
            
        print(f"Updated {os.path.basename(filepath)}")
    except Exception as e:
        print(f"Failed to process {os.path.basename(filepath)}: {e}")
