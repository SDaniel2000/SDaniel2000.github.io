// A keresés megvalósítása js-search segítségével
import JsSearch from 'js-search';

// A JSON-adatok betöltése
async function loadJSON() {
    const response = await fetch('output.json'); // A JSON fájl URL-je
    if (!response.ok) {
        throw new Error('Nem sikerült betölteni a JSON-t.');
    }
    return await response.json();
}

// Keresőmotor beállítása
async function initializeSearch() {
    try {
        const data = await loadJSON();

        // Kereső inicializálása
        const search = new JsSearch.Search('url'); // Az "url" mezőt egyedi azonosítóként használjuk
        search.addIndex('content'); // A "content" mezőben keresünk
        search.addIndex('file_name'); // A "file_name" mezőt is indexeljük
        search.addDocuments(data); // Az adatokat a keresőhöz adjuk

        // Kereső eseménykezelője
        document.getElementById('search-button').addEventListener('click', () => {
            const query = document.getElementById('search-input').value;
            const results = search.search(query);

            // Eredmények megjelenítése
            displayResults(results);
        });
    } catch (error) {
        console.error('Hiba történt a kereső inicializálása közben:', error);
    }
}

// Eredmények megjelenítése
function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // Töröljük a korábbi eredményeket

    if (results.length === 0) {
        resultsContainer.textContent = 'Nincs találat.';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');

        resultElement.innerHTML = `
            <h3>${result.file_name}</h3>
            <p>${highlightText(result.content, query)}</p>
            <a href="${result.url}" target="_blank">Megnyitás</a>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

// Kiemeli a keresett szöveget az eredményben
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Futtatás induláskor
initializeSearch();
