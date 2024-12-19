document.addEventListener('DOMContentLoaded', function() {
    // JSON fájl betöltése
    fetch('output.json')
        .then(response => response.json())
        .then(jsonData => {
            // BloomySearch kereső inicializálása
            const search = new BloomySearch(jsonData.map(item => item.content));

            // Keresési input esemény
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function(e) {
                const query = e.target.value;
                const resultsContainer = document.getElementById('results');
                resultsContainer.innerHTML = '';

                // Keresés végrehajtása
                const results = search.query(query);

                // Eredmények megjelenítése
                results.forEach(result => {
                    const li = document.createElement('div');
                    li.classList.add('result-item');
                    const fileName = jsonData.find(item => item.content === result).file_name;
                    const resultText = result.substring(0, 100) + "...";  // Eredmény rövidítése
                    li.innerHTML = `<strong>${fileName}</strong>: ${resultText}`;
                    resultsContainer.appendChild(li);
                });
            });
        })
        .catch(error => {
            console.error("Hiba történt a JSON fájl betöltésekor:", error);
        });
});
