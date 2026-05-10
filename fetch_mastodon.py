import requests
import json
import os
import time

# Configurazione
USERNAME = "mikymaione"
INSTANCE = "mastodon.social"
DATA_FILE = "_data/mastodon_posts.json"

def fetch_all_posts():
	all_posts = []
	
	# 1. Trova l'ID corretto dell'utente
	print(f"Looking up ID for user @{USERNAME}...")
	lookup_url = f"https://{INSTANCE}/api/v1/accounts/lookup?acct={USERNAME}"
	lookup_res = requests.get(lookup_url)
	
	if lookup_res.status_code != 200:
		print(f"Error finding user: {lookup_res.status_code}")
		return

	user_id = lookup_res.json().get('id')
	print(f"Found ID: {user_id}")

	# 2. Scarica i post
	max_id = None
	while True:
		url = f"https://{INSTANCE}/api/v1/accounts/{user_id}/statuses"
		params = {
			"exclude_replies": "true",
			"exclude_reblogs": "true",
			"limit": 40
		}
		if max_id:
			params["max_id"] = max_id
		
		response = requests.get(url, params=params)
		
		if response.status_code != 200:
			print(f"Error fetching statuses: {response.status_code}")
			break
			
		posts = response.json()
		if not posts:
			break
			
		all_posts.extend(posts)
		max_id = posts[-1]['id']
		
		print(f"Fetched {len(all_posts)} posts so far...")
		time.sleep(0.3)
		
		if len(posts) < 40:
			break

	# Salvataggio
	os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
	with open(DATA_FILE, 'w', encoding='utf-8') as f:
		json.dump(all_posts, f, ensure_ascii=False, indent=4)
	
	print(f"\nSuccess! Total posts saved: {len(all_posts)}")

if __name__ == "__main__":
	fetch_all_posts()