// JSON betöltés fetch használatával
fetch('output.json')  // Itt a JSON fájl helyét add meg
    .then(response => response.json())
    .then(jsonData => {
        // js-search inicializálása
        const search = new JsSearch.Search('file_name');
        search.addIndex('content');  // Keresési indexek
        search.addDocuments(jsonData);

        // Keresés kezelése
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('results');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value;
            if (query.length > 0) {
                const results = search.search(query); // A keresési eredményeket tartalmazza
                displayResults(results, query);
            } else {
                 resultsContainer.innerHTML = '';
            }
        });

        // Eredmények megjelenítése (csak a keresett szövegrészek)
        function displayResults(results, query) {
            resultsContainer.innerHTML = '';
            results.forEach(result => {
                const content = result.content;
                const regex = new RegExp(`(${query})`, 'gi');
                const highlightedContent = content.replace(regex, '<mark>$1</mark>');  // Kiemelés a keresett szövegrészletre

                const resultElement = document.createElement('div');
                resultElement.classList.add('result');
                resultElement.innerHTML = `<p>${highlightedContent}</p>`;  // A szöveg kiemelt része

                resultsContainer.appendChild(resultElement);
            });
        }
    })
    .catch(error => console.error('Hiba a JSON betöltésénél:', error));
