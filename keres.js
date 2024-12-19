// BloomySearch importálása
import { BloomySearch } from 'https://cdn.jsdelivr.net/npm/bloomysearch@1.0.0/dist/bloomysearch.min.js';

// JSON fájl betöltése
fetch('output.json')
    .then(response => response.json())
    .then(data => {
        // Inicializálás a BloomySearch-kel
        const search = new BloomySearch();

        // Indexelés a JSON adatokból
        data.forEach(item => {
            search.add(item.content, item.file_name, item.url);
        });

        // Keresés eseménykezelő
        document.getElementById('search-input').addEventListener('input', (event) => {
            const query = event.target.value;

            if (query.length > 2) { // Minimum 3 karaktert kell beírni a kereséshez
                // Keresés az indexelt adatokban
                const results = search.search(query);
                displayResults(results);
            } else {
                clearResults();
            }
        });
    })
    .catch(error => console.error('Hiba történt a JSON fájl betöltésekor:', error));

// Eredmények megjelenítése
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Töröljük a régi eredményeket

    if (results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
                <h3><a href="${result.url}" target="_blank">${result.file_name}</a></h3>
                <p>${result.text.substring(0, 300)}...</p> <!-- A szöveg elejét jelenítjük meg -->
            `;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nincs találat.</p>';
    }
}

// Eredmények törlése
function clearResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
}
