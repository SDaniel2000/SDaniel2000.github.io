document.addEventListener("DOMContentLoaded", function() {
    async function loadJSON() {
        try {
            const response = await fetch('output.json'); // JSON fájl URL-je
            if (!response.ok) {
                throw new Error('Nem sikerült betölteni a JSON-t.');
            }
            return await response.json();
        } catch (error) {
            console.error('Hiba történt a JSON betöltésekor:', error);
            return [];
        }
    }

    async function initializeSearch() {
        try {
            const data = await loadJSON();

            // js-search keresőmotor inicializálása
            const search = new JsSearch.Search('url'); // Az "url" mezőt használjuk egyedi azonosítóként
            search.addIndex('content'); // A "content" mezőben keresünk
            search.addDocuments(data); // Az adatokat a keresőhöz adjuk

            // Keresés eseménykezelője (most már a gépelésre reagál)
            document.getElementById('search-input').addEventListener('input', () => {
                const query = document.getElementById('search-input').value.trim();
                const results = search.search(query);

                // Eredmények megjelenítése
                displayResults(results, query);
            });
        } catch (error) {
            console.error('Hiba történt a kereső inicializálása közben:', error);
        }
    }

    // Eredmények megjelenítése
    function displayResults(results, query) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Előző eredmények törlése

        if (results.length === 0) {
            resultsContainer.textContent = 'Nincs találat.';
            return;
        }

        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');

            // Kiemelés csak a content mezőben található keresett szövegről
            const highlightedText = highlightText(result.content, query);

            resultElement.innerHTML = 
                `<h3>${result.file_name}</h3>
                <p>${highlightedText}</p>
                <a href="${result.url}" target="_blank">${result.url}</a>`;  // A link itt változik

            resultsContainer.appendChild(resultElement);
        });
    }

    // Keresett szöveg kiemelése
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Futtatás induláskor
    initializeSearch();
});
