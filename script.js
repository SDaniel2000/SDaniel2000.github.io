document.getElementById("hideDealerCheckbox").addEventListener("change", function() {
    var dealer = document.getElementById("dealer");
    if (this.checked) {
        dealer.style.display = "none";
    } else {
        dealer.style.display = "block";
    }
});

const positions = ["UTG", "MP", "CO", "BU", "SB", "BB"];
        
        
        
        let score = 0;
        let villainPos, heroPos, currentHand, currentHand2;
        let wrongAnswersList = [];

        
        function generateNewQuestion()
         {
            
    villainPos = positions[Math.floor(Math.random() * positions.length)];

    // Meghatározzuk a Villain utáni pozíciókat
    let villainIndex = positions.indexOf(villainPos);
    let availableHeroPositions = positions.slice(villainIndex + 1); // Csak a Villain utáni pozíciók

    
    
    // Ha nincs elérhető Hero pozíció (pl. Villain BB), akkor új kérdést generálunk
    if (availableHeroPositions.length === 0) {
        generateNewQuestion();
        return;
    }

    heroPos = availableHeroPositions[Math.floor(Math.random() * availableHeroPositions.length)];

    currentHand = generateRandomHand();
    highlightPositions();
   

    showFoldAnimation();

    
}


function generateRandomHand() {
    const ranks = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

    let rank1 = ranks[Math.floor(Math.random() * ranks.length)];
    let rank2 = ranks[Math.floor(Math.random() * ranks.length)];

    // Ha pár
    if (rank1 === rank2) {
        return rank1 + rank2;
    }

    // Páron kívül eldöntjük hogy suited vagy offsuit
    const suited = Math.random() < 0.5; // 50% eséllyel
    const suffix = suited ? 's' : 'o';

    // Magasabb kártya legyen elöl a szokásos formátum miatt
    const sorted = [rank1, rank2].sort((a, b) => ranks.indexOf(a) - ranks.indexOf(b));

    return sorted[0] + sorted[1] + suffix;
}





        // Pozíciók kiemelése
        function highlightPositions() {
    document.querySelectorAll('.positionCircle').forEach(circle => {
        circle.classList.remove('highlightedHero', 'highlightedVillain');
    });

    document.getElementById(villainPos).classList.add('highlightedVillain');
    document.getElementById(heroPos).classList.add('highlightedHero');
}


// Minden pozícióhoz létrehozunk egy objektumot
let positionStats = {
    SB: { correct: 0, total: 0 },
    BB: { correct: 0, total: 0 },
    UTG: { correct: 0, total: 0 },
    MP: { correct: 0, total: 0 },
    CO: { correct: 0, total: 0 },
    BU: { correct: 0, total: 0 }
};

// Függvény a statisztika frissítésére
function updateStats(position, isCorrect) {
    if (!positionStats[position]) return;

    positionStats[position].total++;  // Minden döntés növeli az összes döntés számát
    if (isCorrect) {
        positionStats[position].correct++;  // Ha helyes volt, ezt is növeljük
    }

    // Frissítjük az adott pozíció százalékos értékét
    let percentage = (positionStats[position].correct / positionStats[position].total) * 100;
    document.getElementById(position.toLowerCase() + "Stat").textContent = percentage.toFixed(1) + "%";
}

// Simuláció: Példa egy döntés frissítésére (Ezt hívd meg, amikor választás történik)
function playerChoice(position, isCorrect) {
    updateStats(position, isCorrect);
}


let currentPot = 0;
let currentBet = 0;
let currentOdds = 0;

function generatePotOddsQuestion() {
    const hands = Object.keys(equityData);
    const randomHand = hands[Math.floor(Math.random() * hands.length)];
    const equity = equityData[randomHand];

    const potSize = Math.floor(Math.random() * 80) + 20;
    const betSize = Math.floor(Math.random() * potSize);

    const callAmount = betSize;
    const totalPot = potSize + betSize;
    const potOdds = callAmount / totalPot;
    const potOddsPercent = (potOdds * 100).toFixed(1);
    const equityPercent = (equity * 100).toFixed(1);

    const shouldCall = equity > potOdds;

    // Mentés későbbi megjelenítéshez
    window.currentPotOddsData = {
        hand: randomHand,
        potSize,
        betSize,
        equityPercent,
        potOddsPercent,
        correctAction: shouldCall ? "Call" : "Fold"
    };

    document.getElementById("potOddsQuestion").innerHTML = `
        <strong>Kéz:</strong> ${randomHand} <br>
        <strong>Pot:</strong> ${potSize} BB <br>
        <strong>Bet:</strong> ${betSize} BB <br>
        <strong>Equity:</strong> ${equityPercent}% <br><br>
        Mit teszel? (Pot odds alapján)<br><br>
        <button onclick="answerPotOdds(true)">Call</button>
        <button onclick="answerPotOdds(false)">Fold</button>
    `;

    document.getElementById("potOddsResult").innerHTML = "";
}

function answerPotOdds(playerChoseCall) {
    const data = window.currentPotOddsData;
    const correctDecision = data.correctAction === "Call";

    let icon = playerChoseCall === correctDecision ? "✅" : "❌ Hibás döntés!";

    document.getElementById("potOddsResult").innerHTML = `
        ${icon}<br><br>
        Pot Odds: ${data.potOddsPercent}%<br>
    `;

    // Új kérdés 3 másodperc múlva
    setTimeout(() => {
        generatePotOddsQuestion();
    }, 3000);
}







        
function checkAnswer(choice) {
    const correctThreeBet = threeBetRanges[heroPos]?.includes(currentHand);
    const correctCall = !correctThreeBet && callRanges[heroPos]?.[villainPos]?.includes(currentHand);
    const correctFold = !correctThreeBet && !correctCall;

    let correctAnswer = "";
    if (correctThreeBet) correctAnswer = "3-bet";
    else if (correctCall) correctAnswer = "call";
    else correctAnswer = "fold";

    const isCorrect = choice === correctAnswer;

    if (isCorrect) {
        score++;
        document.getElementById("message").textContent = "✅";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerHTML = `❌ <span style="font-size: 14px; color: gray;">Helyes válasz: ${correctAnswer}</span>`;
        document.getElementById("message").style.color = "red";
        score = 0;

        // Elmentjük az elrontott választ
        let wrongEntry = `Villain: ${villainPos}, Hero: ${heroPos}, Hand: ${currentHand}, Választott: ${choice}, Helyes: ${correctAnswer}`;
        wrongAnswersList.push(wrongEntry);
        updateWrongAnswers();
    }

    document.getElementById("score").textContent = score;
    updateStats(heroPos, isCorrect);
    generateNewQuestion();
}

            function updateWrongAnswers() {
            let wrongAnswersElement = document.getElementById("wrongAnswers");
            wrongAnswersElement.innerHTML = "";
            wrongAnswersList.forEach(entry => {
                let li = document.createElement("li");
                li.textContent = entry;
                wrongAnswersElement.appendChild(li);
            });
        }
        function clearHands() {
            // Töröljük az összes pozícióhoz tartozó handText elemet
            document.querySelectorAll('.handText').forEach(hand => {
                hand.remove();
            });
        }
        
        function showFoldAnimation() {
            let delay = 290; // Fél másodperces lépések
            let animationStopped = false; // Flag a leállításhoz
        
            let villainIndex = positions.indexOf(villainPos);
            let heroIndex = positions.indexOf(heroPos);
        
            // Minden pozíció alapértelmezetten nincs kijelölve
            document.querySelectorAll('.positionCircle').forEach(circle => {
                circle.classList.remove('highlightedHero', 'highlightedVillain');
            });
        
            // Töröljük az előző kézszövegeket
            clearHands();
        
            // Ellenőrizzük az összes pozíciót
            positions.forEach((pos, index) => {
                // Ha már megtaláltuk a Hero-t, állítsuk le az animációt
                if (animationStopped) return;
        
                setTimeout(() => {
                    let positionElement = document.getElementById(pos);
                    let foldText = document.createElement("div");
                    foldText.classList.add("foldText");
        
                    // Ha az aktuális pozíció Villian, akkor "raise" felirat jelenik meg, és kijelöljük
                    if (pos === villainPos) {
                        positionElement.classList.add('highlightedVillain');
                       
                    } 
                    // Ha az aktuális pozíció Hero, akkor kijelöljük és leállítjuk az animációt
                    else if (pos === heroPos) {
                        positionElement.classList.add('highlightedHero');
                        foldText.textContent = "";  // Nem kell "fold" felirat
        
                        // Kéz (Hand) megjelenítése a Hero pozíció fölött
                        let handText = document.createElement("div");
                        handText.classList.add("handText");
                        handText.textContent = currentHand; // Itt adhatod meg a Hero kezét
                        positionElement.appendChild(handText);
        
                        animationStopped = true; // Ha Hero-t megtaláljuk, leállítjuk az animációt
                    } 
                    // Ha nem Villian és nem Hero, akkor "fold" felirat
                    else {
                        foldText.textContent = "Fold";
                    }
        
                    // Csak akkor adjuk hozzá a foldText-et, ha nem állt le az animáció
                    if (!animationStopped) {
                        positionElement.appendChild(foldText);
        
                        // Fél másodperc után eltávolítjuk a feliratot
                        setTimeout(() => {
                            foldText.remove();
                        }, 500);
                    }
                }, index * delay);
            });

           window.onload = function () {
                generateNewQuestion(); // meglévő funkciód
                generatePotOddsQuestion(); // új pot odds kérdés
              };
        }
        
      
        generateNewQuestion();
    