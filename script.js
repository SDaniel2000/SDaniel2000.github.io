const positions = ["UTG", "MP", "CO", "BU", "SB", "BB"];
const hands = ["AA", "AKs", "AQo", "KQs", "JTs", "99", "88", "76s", "A5s", "QJo"];
let score = 0;

// Helyes döntések (range-ek alapján)
const correctAnswers = {
    "UTG-MP-AA": "Call",
    "UTG-MP-AKo": "Call",
    "UTG-MP-76s": "Fold",
    "MP-CO-JTs": "Call",
    "CO-BU-88": "Call",
    "SB-BB-QJo": "Fold",
};

let currentScenario = {};

function generateScenario() {
    let villain = positions[Math.floor(Math.random() * positions.length)];
    let hero = positions[Math.floor(Math.random() * positions.length)];
    let hand = hands[Math.floor(Math.random() * hands.length)];

    document.getElementById("villain-pos").innerText = villain;
    document.getElementById("hero-pos").innerText = hero;
    document.getElementById("hand").innerText = hand;

    currentScenario = { villain, hero, hand };
}

function playerAction(action) {
    let key = `${currentScenario.villain}-${currentScenario.hero}-${currentScenario.hand}`;
    let correct = correctAnswers[key] || "Fold"; // Alapértelmezés: Fold

    if (action === correct) {
        score++;
        document.getElementById("score").innerText = score;
        generateScenario();
    } else {
        alert(`Hibás válasz! Végeredmény: ${score} pont`);
        score = 0;
        document.getElementById("score").innerText = score;
        generateScenario();
    }
}

generateScenario();
