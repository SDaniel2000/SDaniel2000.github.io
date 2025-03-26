import random

positions = ["UTG", "MP", "CO", "BTN", "SB", "BB"]
hands = ["AA", "KK", "QQ", "AKs", "AQo", "JTs", "88", "22", "KQo", "A5s"]

def generate_scenario():
    villain_pos = random.choice(positions[:-1])  # Villain nem lehet BB
    hero_pos = random.choice(positions[positions.index(villain_pos) + 1:])  # Hero csak későbbi pozícióban lehet
    hand = random.choice(hands)
    return villain_pos, hero_pos, hand

def main():
    while True:
        villain, hero, hand = generate_scenario()
        print(f"Villain ({villain}) emel, te pedig {hero} vagy, a kezed: {hand}")
        action = input("Mit teszel? (fold/call/3-bet): ").strip().lower()
        if action not in ["fold", "call", "3-bet"]:
            print("Érvénytelen választás, próbáld újra!")
        else:
            print(f"Te döntésed: {action}\n")

if __name__ == "__main__":
    main()