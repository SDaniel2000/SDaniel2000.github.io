import random

POSITIONS = ["UTG", "MP", "CO", "BU", "SB", "BB"]

# Teljes call range-ek (az általad küldött táblázat alapján)
CALL_RANGES = {
    "MP": {
        "UTG": ["JJ", "TT", "99", "88", "AQo", "AJo", "AQs", "AJs", "KQs"],
        "MP": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "CO": ["99", "66", "AQo", "ATo", "A9s", "A5s", "KQo", "KJo", "KTs", "QTs", "QTs+", "JTs"],
        "BU": ["88", "55", "AJo", "A8o", "A5s", "A2s", "KQo", "KTs", "QTs", "JTs", "T9s"],
        "SB": ["77", "22", "AJo", "A8o", "A5s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s"]
    },
    "CO": {
        "UTG": ["JJ", "TT", "99", "88", "AQo", "AJo", "AQs", "AJs", "KQs"],
        "MP": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "CO": ["99", "55", "AJo", "A8o", "A9s", "A5s", "KQo", "KJo", "KTs", "QTs", "JTs"],
        "BU": ["88", "44", "AJo", "A7o", "A5s", "A2s", "KQo", "KTs", "QTs", "J9s", "T8s", "98s"],
        "SB": ["77", "22", "AJo", "A8o", "A5s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s"]
    },
    "BU": {
        "UTG": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "MP": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "CO": ["88", "55", "AJo", "A8o", "A5s", "A2s", "KQo", "KJo", "KTs", "QTs", "JTs"],
        "BU": ["77", "22", "AJo", "A8o", "A5s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s"]
    },
    "SB": {
        "UTG": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "MP": ["TT", "99", "88", "77", "AQo", "ATo", "AQs", "A9s", "KQs", "KJs", "QJs"],
        "CO": ["88", "55", "AJo", "A8o", "A5s", "A2s", "KQo", "KJo", "KTs", "QTs", "JTs"],
        "BU": ["77", "22", "AJo", "A8o", "A5s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s"]
    },
    "BB": {
        "UTG": ["99", "88", "77", "66", "22", "AJo", "A2o", "A5s", "A2s", "KQo", "KTo", "K9s", "QTs", "J9s", "T8s", "98s"],
        "MP": ["88", "22", "AJo", "A2o", "A6s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s", "87s"],
        "CO": ["77", "22", "AJo", "A2o", "A6s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s", "87s"],
        "BU": ["66", "22", "AJo", "A2o", "A5s", "A2s", "KTo", "K9s", "QTs", "J9s", "T8s", "98s", "87s", "76s"]
    }
}

def generate_random_hand():
    ranks = "23456789TJQKA"
    return random.choice(ranks) + random.choice(ranks)

def should_call(hero_pos, villain_pos, hand):
    return hand in CALL_RANGES.get(hero_pos, {}).get(villain_pos, [])

# Játék indítása
score = 0
while True:
    villain_pos = random.choice(POSITIONS[:-1])  # BB nem emel
    hero_pos = random.choice(POSITIONS[1:])  # UTG nem lehet Hero
    hand = generate_random_hand()
    
    print(f"\nVillain ({villain_pos}) emelt.")
    print(f"Hero ({hero_pos}) kapott lapja: {hand}")
    
    if should_call(hero_pos, villain_pos, hand):
        score += 1
        print("✔️ Helyes válasz: CALL!")
        print(f"Pontszámod: {score}\n")
    else:
        print("❌ Rossz válasz: Dobnod kellene!")
        print(f"Game over! Végeredmény: {score} pont\n")
        break
