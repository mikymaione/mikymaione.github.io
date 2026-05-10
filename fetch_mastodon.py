import requests
import json
import os

# Configurazione
USERNAME = "mikymaione"
INSTANCE = "mastodon.social"
DATA_FILE = "_data/mastodon_posts.json"

def fetch_incremental_posts():
	# 1. Carica i post esistenti
	existing_posts = []
	last_id = None
	
	if os.path.exists(DATA_FILE):
		with open(DATA_FILE, 'r', encoding='utf-8') as f:
			existing_posts = json.load(f)
			if existing_posts:
				# Il primo della lista è solitamente il più recente
				last_id = existing_posts[0]['id']

	# 2. Trova l'ID utente (Lookup rimane uguale)
	lookup_url = f"https://{INSTANCE}/api/v1/accounts/lookup?acct={USERNAME}"
	lookup_res = requests.get(lookup_url)
	if lookup_res.status_code != 200: return
	user_id = lookup_res.json().get('id')

	# 3. Scarica solo i NUOVI post
	url = f"https://{INSTANCE}/api/v1/accounts/{user_id}/statuses"
	params = {
		"exclude_replies": "true",
		"exclude_reblogs": "true",
		"limit": 40
	}
	
	# Se abbiamo un last_id, chiediamo solo cosa è successo DOPO
	if last_id:
		params["since_id"] = last_id
		print(f"Checking for posts newer than ID: {last_id}...")
	else:
		print("No local data found. Fetching everything...")

	response = requests.get(url, params=params)
	if response.status_code != 200:
		print(f"Error: {response.status_code}")
		return

	new_posts = response.json()

	if not new_posts:
		print("Everything is up to date! No new posts found.")
		return

	print(f"Found {len(new_posts)} new posts.")

	# 4. Unisci: Nuovi + Vecchi
	# Mastodon restituisce i post dal più recente al più vecchio
	combined_posts = new_posts + existing_posts

	# 5. Salva tutto
	os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
	with open(DATA_FILE, 'w', encoding='utf-8') as f:
		json.dump(combined_posts, f, ensure_ascii=False, indent=4)

	print(f"Success! Database updated. Total posts: {len(combined_posts)}")

if __name__ == "__main__":
	fetch_incremental_posts()