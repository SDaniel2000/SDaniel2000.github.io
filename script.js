const positions = ["UTG", "MP", "CO", "BU", "SB", "BB"];
        const callRanges = {
            "MP": {
                "UTG": [ "T♥️T♠️", "9♦️9♠️", "8♠️8♦️", "A♣️Q♣️", "A♥️J♣️",  "A♠️J♠️", "K♣️Q♣️"]
            },
            "CO": {
                "UTG": [  "9♦️9♠️", "8♠️8♦️",  "A♥️J♣️", "A♠️J♠️", "K♣️Q♣️"],
                "MP":  [ "9♦️9♠️", "8♠️8♦️", "7♠️7♥️", , "A♥️J♣️", "A♥️T♣️",  "A♠️J♠️", "A♥️T♥️", "A♦️9♦️", "K♣️Q♣️", "K♥️J♥️", "Q♣️J♣️"]
            },
            "BU": {
                "UTG": [  "8♠️8♦️", "7♠️7♥️",   "A♥️T♣️", "Q♣️J♣️"],
                "MP": [ "8♠️8♦️", "7♠️7♥️", "6♥️6♣️",   "A♥️T♣️",   "K♦️J♣️",    "Q♦️T♦️", "Q♣️J♣️"],
                "CO": ["8♠️8♦️", "7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "A♥️T♣️", "A♦️9♣️", "A♠️8♥️",  "A♥️8♥️", "A♥️7♥️", "A♥️6♥️", "A♥️5♥️", "K♦️J♣️",  "Q♦️T♦️", "Q♣️J♣️", "J♦️T♦️", "T♥️9♥️"]
            },
            "SB": {
                "UTG": [   "7♠️7♥️",    "Q♣️J♣️"],
                "MP": [  "7♠️7♥️", "6♥️6♣️",     "Q♦️T♦️", "Q♣️J♣️"],
                "CO": [ "7♠️7♥️", "6♥️6♣️", "5♠️5♥️",   "A♦️9♣️", "A♠️8♥️", "Q♦️T♦️", "Q♣️J♣️", "J♦️T♦️", "T♥️9♥️"],
                "BU": ["7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️", "2♥️2♠️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♣️2♦️",  "A♣️4♣️", "A♥️3♥️", "A♣️2♣️", "K♦️J♣️", "K♥️T♠️",   "T♥️9♥️", "9♣️8♣️", "8♥️7♥️"]
            },
            "BB": {
                "UTG": ["9♦️9♠️", "8♠️8♦️", "7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️","2♥️2♠️", "A♥️J♣️", "A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♣️2♦️", "A♥️5♥️","A♣️4♣️","A♥️3♥️","A♣️2♣️", "K♦️Q♠️", "K♥️T♠️", "K♥️9♥️", "K♦️T♦️","K♥️J♥️","K♣️Q♣️", "Q♦️T♦️", "Q♣️J♣️", "J♣️9♣️", "J♦️T♦️", "T♥️8♥️", "T♥️9♥️", "9♣️8♣️",],
                "MP": ["8♠️8♦️", "7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️","2♥️2♠️","A♥️J♣️", "A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♥️6♥️","A♥️5♥️","A♣️4♣️","A♥️3♥️","A♣️2♣️","K♦️Q♠️", "K♥️T♠️", "K♥️9♥️", "K♦️T♦️","K♥️J♥️","K♣️Q♣️", "Q♦️T♦️", "Q♣️J♣️", "J♣️9♣️", "J♦️T♦️", "T♥️8♥️", "T♥️9♥️", "9♣️8♣️", "8♥️7♥️"],
                "CO": ["7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️","2♥️2♠️","A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♣️2♦️","A♥️6♥️","A♥️5♥️","A♣️4♣️","A♥️3♥️","A♣️2♣️", "K♦️J♣️", "K♥️T♠️", "K♥️9♥️", "K♦️T♦️","K♥️J♥️","K♣️Q♣️", "Q♦️T♦️", "Q♣️J♣️", "J♣️9♣️", "J♦️T♦️", "T♥️8♥️", "T♥️9♥️", "9♣️8♣️", "8♥️7♥️"],
                "BU": ["6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️","2♥️2♠️","A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♣️2♦️", "A♥️5♥️","A♣️4♣️","A♥️3♥️","A♣️2♣️", "K♥️T♠️", "K♥️9♥️", "K♦️T♦️","K♥️J♥️","K♣️Q♣️", "Q♦️T♦️", "Q♣️J♣️", "J♣️9♣️", "J♦️T♦️", "T♥️8♥️", "T♥️9♥️", "9♣️8♣️", "8♥️7♥️", "7♥️6♥️"],
                "SB": ["5♠️5♥️", "4♦️4♥️", "3♦️3♠️","2♥️2♠️", "A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️","A♥️6♠️","A♠️5♥️","A♠️4♦️","A♠️3♦️","A♣️2♦️", "A♥️5♥️","A♣️4♣️","A♥️3♥️","A♣️2♣️", "K♥️T♠️", "K♥️9♥️", "K♦️T♦️","K♥️J♥️","K♣️Q♣️", "Q♦️T♦️", "Q♣️J♣️", "J♣️9♣️", "J♦️T♦️", "T♥️8♥️", "T♥️9♥️", "9♣️8♣️", "8♥️7♥️", "7♥️6♥️"]
            }
        };
        
        const threeBetRanges = {
            "UTG":["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️J♥️", "A♥️K♥️",],
            "MP": ["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️T♦️", "A♥️K♥️", "A♣️Q♣️" ,"A♠️K♥️"],
            "CO": ["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️T♦️", "T♥️T♠️" ,"A♥️K♥️", "A♣️Q♣️", "K♣️Q♣️", "A♠️K♥️", "A♣️Q♣️"],
            "BU": ["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️T♦️", "T♥️T♠️", "9♦️9♠️", "A♥️K♥️", "A♣️Q♣️", "A♠️J♠️", "A♥️T♥️" ,"A♦️9♦️" ,"K♣️Q♣️" ,"K♥️J♥️" ,"K♦️T♦️", "A♠️K♥️" ,"A♣️Q♣️","A♥️J♣️" ,"K♦️Q♠️"],
            "SB": ["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️T♦️", "T♥️T♠️", "9♦️9♠️", "8♠️8♦️", "A♥️K♥️", "A♣️Q♣️", "A♠️J♠️", "A♥️T♥️" ,"A♦️9♦️" ,"A♥️8♥️" ,"A♥️7♥️", "A♥️6♥️", "A♥️5♥️", "K♣️Q♣️", "K♥️J♥️" ,"K♦️T♦️", "K♥️9♥️", "Q♣️J♣️", "Q♦️T♦️" ,"Q♠️9♠️", "J♦️T♦️" ,"A♠️K♥️" ,"A♣️Q♣️", "A♥️J♣️", "A♥️T♣️", "K♦️Q♠️" ,"K♦️J♣️", "Q♣️J♠️"],
            "BB": ["A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "A♠️K♥️", "A♥️K♥️",]
        };

        let score = 0;
        let villainPos, heroPos, currentHand;
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
    const strongHands = [
        "A♥️A♣️", "K♣️K♥️", "Q♠️Q♦️", "J♦️J♥️", "T♥️T♠️", "9♦️9♠️", "8♠️8♦️", "7♠️7♥️", "6♥️6♣️", "5♠️5♥️", "4♦️4♥️", "3♦️3♠️", "2♥️2♠️",

        // SUITED HANDS
        "A♥️K♥️","A♣️Q♣️","A♠️J♠️","A♥️T♥️",
        "A♣️2♣️","A♥️3♥️","A♣️4♣️","A♥️5♥️","A♥️6♥️", "A♥️7♥️","A♥️8♥️","A♦️9♦️",
        "K♣️Q♣️","K♥️J♥️", "K♦️T♦️","K♠️8♠️","K♥️9♥️","Q♣️J♣️","Q♦️T♦️", 
        "Q♠️9♠️","J♣️T♣️","J♣️9♣️","J♥️8♥️","J♦️T♦️","T♥️9♥️", "T♠️9♠️", "9♣️8♣️", 
        "8♥️7♥️","7♥️6♥️","6♦️5♦️","9♥️7♥️","T♥️8♥️","8♣️6♣️",



        // OFF SHUITED HANDS
        "A♠️K♥️", "A♠️Q♦️","A♥️J♣️", "A♥️T♣️", "A♦️9♣️", "A♠️8♥️", "A♣️7♥️", "A♥️6♠️", "A♠️5♥️", "A♠️4♦️", "A♠️3♦️", "A♣️2♦️",  
         "K♥️T♠️", "K♦️J♣️", "K♦️9♠️", "A♠️K♥️", "A♦️Q♣️", 
        "K♦️Q♠️", "K♥️9♣️", "Q♣️J♠️", "Q♦️T♥️",  
        "Q♠️9♥️", "J♥️T♣️", "J♣️9♥️", "J♥️9♣️", "J♥️8♣️",
    ];

    // Véletlenszerűen választunk egy erős kezet a fenti listából
    return strongHands[Math.floor(Math.random() * strongHands.length)];
}
        // Pozíciók kiemelése
        function highlightPositions() {
    document.querySelectorAll('.positionCircle').forEach(circle => {
        circle.classList.remove('highlightedHero', 'highlightedVillain');
    });

    document.getElementById(villainPos).classList.add('highlightedVillain');
    document.getElementById(heroPos).classList.add('highlightedHero');
}




        
        function checkAnswer(choice) {
        const correctThreeBet = threeBetRanges[heroPos]?.includes(currentHand);
        const correctCall = !correctThreeBet && callRanges[heroPos]?.[villainPos]?.includes(currentHand);
        const correctFold = !correctThreeBet && !correctCall;

        const isCorrect =
            (choice === "3-bet" && correctThreeBet) ||
            (choice === "call" && correctCall) ||
            (choice === "fold" && correctFold);

            if (isCorrect) {
    score++;
    document.getElementById("message").textContent = "✅";
    document.getElementById("message").style.color = "green";
} else {

    document.getElementById("message").textContent = "❌";
    document.getElementById("message").style.color = "red";
    score = 0;

            // Elmentjük az elrontott választ
                let wrongEntry = `Villain: ${villainPos}, Hero: ${heroPos}, Hand: ${currentHand}, Választott: ${choice}`;
                wrongAnswersList.push(wrongEntry);
                updateWrongAnswers();
    
}
        document.getElementById("score").textContent = score;
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
        }
        
        
        
        
        
        
        

        
        
        
        




        generateNewQuestion();
    