const positions = ["UTG", "MP", "CO", "BU", "SB", "BB"];
        const callRanges = {
            "MP": {
                "UTG": [ "TT", "99", "88", "AQo", "AJo",  "AJs", "KQs"]
            },
            "CO": {
                "UTG": [  "99", "88",  "AJo", "AJs", "KQs"],
                "MP":  [ "99", "88", "77", , "AJo", "ATo",  "AJs", "A10s", "A9s", "KQs", "KJs", "QJs"]
            },
            "BU": {
                "UTG": [  "88", "77",   "ATo", "QJs"],
                "MP": [ "88", "77", "66",   "ATo",   "KJo",    "QTs", "QJs"],
                "CO": ["88", "77", "66", "55", "ATo", "A9o", "A8o",  "A8s", "A7s", "A6s", "A5s", "KJo",  "QTs", "QJs", "JTs", "T9s"]
            },
            "SB": {
                "UTG": [   "77",    "QJs"],
                "MP": [  "77", "66",     "QTs", "QJs"],
                "CO": [ "77", "66", "55",   "A9o", "A8o", "QTs", "QJs", "JTs", "T9s"],
                "BU": ["77", "66", "55", "44", "33", "22", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o",  "A4s", "A3s", "A2s", "Kjo", "KTo",   "T9s", "98s", "87s"]
            },
            "BB": {
                "UTG": ["99", "88", "77", "66", "55", "44", "33","22", "AJo", "ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o", "A5s","A4s","A3s","A2s", "KQo", "KTo", "K9s", "KTs","KJs","KQs", "QTs", "QJs", "J9s", "JTs", "T8s", "T9s", "98s",],
                "MP": ["88", "77", "66", "55", "44", "33","22","AJo", "ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A6s","A5s","A4s","A3s","A2s","KQo", "KTo", "K9s", "KTs","KJs","KQs", "QTs", "QJs", "J9s", "JTs", "T8s", "T9s", "98s", "87s"],
                "CO": ["77", "66", "55", "44", "33","22","ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o","A6s","A5s","A4s","A3s","A2s", "KJo", "KTo", "K9s", "KTs","KJs","KQs", "QTs", "QJs", "J9s", "JTs", "T8s", "T9s", "98s", "87s"],
                "BU": ["66", "55", "44", "33","22","ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o", "A5s","A4s","A3s","A2s", "KTo", "K9s", "KTs","KJs","KQs", "QTs", "QJs", "J9s", "JTs", "T8s", "T9s", "98s", "87s", "76s"],
                "SB": ["55", "44", "33","22", "ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o", "A5s","A4s","A3s","A2s", "KTo", "K9s", "KTs","KJs","KQs", "QTs", "QJs", "J9s", "JTs", "T8s", "T9s", "98s", "87s", "76s"]
            }
        };
        
        const threeBetRanges = {
            "UTG": ["AA", "KK", "QQ", "AKs",],
            "MP": ["AA", "KK", "QQ", "JJ", "AKs", "AQs" ,"AKo"],
            "CO": ["AA", "KK", "QQ", "JJ", "TT" ,"AKs", "AQs", "KQS", "AKo", "AQo"],
            "BU": ["AA", "KK", "QQ", "JJ", "TT", "99", "AKs", "AQs", "AJs", "ATs" ,"A9s" ,"KQs" ,"KJs" ,"KTs", "AKo" ,"AQo","AJo" ,"KQo"],
            "SB": ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "AKs", "AQs", "AJs", "ATs" ,"A9s" ,"A8s" ,"A7s", "A6s", "A5s", "KQs", "KJs" ,"KTs", "K9s", "QJs", "QTs" ,"Q9s", "JTs" ,"AKo" ,"AQo", "AJo", "ATo", "KQo" ,"KJo", "QJo"],
            "BB": ["AA", "KK", "QQ", "AKo", "AKs",]
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
        "AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22","AKs", "AQs", "AJs", "ATs",
        "A2s", "A3s", "A4s", "A5s", "A6s", "A7s", "A8s", "A9s","KQs", "KJs", "KTs", "K8s", "K9s", "QJs", "QTs", "Q9s", 
        "JTs", "J9s", "J8s", "JTs", "T8s", "T9s", "98s", "87s", "76s", "65s", "97s", "T8s", "86s",
        "AJo", "ATo", "A9o", "A8o", "A7o","A6o","A5o","A4o","A3o","A2o", "KQo", "KTo", "KJo", "K9o", 
        "AKo", "AQo","KQo", "K9o", "QJo","QTo", "Q9o","JTo", "J9o","J9o", "J8o",
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
    document.getElementById("message").textContent = "Helyes válasz! ✅";
    document.getElementById("message").style.color = "green";
} else {

    document.getElementById("message").textContent = "Hibás válasz. ❌";
    document.getElementById("message").style.color = "red";
    score = 0;

            // Elmentjük az elrontott választ
                let wrongEntry = `Villain: ${villainPos}, Hero: ${heroPos}, Hand: ${currentHand}, Választott: ${choice}`;
                wrongAnswersList.push(wrongEntry);
                updateWrongAnswers();
    
}





        document.getElementById("score").textContent = "Pontsszámod:" + score;
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
            let delay = 500; // Fél másodperces lépések
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
                        foldText.textContent = "Raise";
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
    