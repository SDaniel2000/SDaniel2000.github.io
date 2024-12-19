// JSON betöltés fetch használatával
fetch('https://sdaniel2000.github.io/output.json')  // Itt a JSON fájl helyét add meg
    .then(response => response.json())
    .then(jsonData => {
        // js-search inicializálása
        const search = new JsSearch.Search('file_name');
        search.addIndex('content');  // Keresési indexek
        search.addDocuments(jsonData);  // Dokumentumok hozzáadása

        // Keresési esemény kezelése
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value;
            if (query.length > 0) {
                const results = search.search(query); // A keresési eredményeket tartalmazza
                displayResults(results);  // Eredmények megjelenítése
            } else {
                resultsContainer.innerHTML = '';  // Ha üres a keresőmező, törölje az eredményeket
            }
        });

        // Eredmények megjelenítése
        function displayResults(results) {
            resultsContainer.innerHTML = '';  // Eredmények törlése
            results.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('result');
                resultElement.innerHTML = `<a href="${result.url}" target="_blank">${result.file_name}</a>`;  // Az URL és a fájl neve
                resultsContainer.appendChild(resultElement);
            });
        }
    })
    .catch(error => console.error('Hiba a JSON betöltésénél:', error));
