//A JSON-adatok betöltése
async function loadJSON() {
    try {
        const response = await fetch('output.json'); 
        if (!response.ok) {
            throw new Error('Nem sikerült betölteni a JSON-t.');
        }
        return await response.json();
    } catch (error) {
        console.error('Hiba történt a JSON betöltésekor:', error);
        return [];
    }
}
//Kereső inicializálása 
async function initializeSearch() {
    try {
        const data = await loadJSON();

        //js-search keresőmotor inicializálása
        const search = new JsSearch.Search('url'); 
        search.addIndex('content'); 
        search.addDocuments(data); 

        //Keresés eseménykezelője
        document.getElementById('search-input').addEventListener('input', () => {
            const query = document.getElementById('search-input').value.trim();
            const results = search.search(query);

            //Eredmények megjelenítése
            displayResults(results, query);
        });
    } catch (error) {
        console.error('Hiba történt a kereső inicializálása közben:', error);
    }
}

//Eredmények megjelenítése
function displayResults(results, query) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultsContainer.textContent = 'Nincs találat...';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');

        //A keresett szövegrész kiemelése
        const highlightedText = extractRelevantSnippet(result.content, query);

        resultElement.innerHTML = `
            <h3><a href="${result.url}" target="_blank">${result.file_name}</a></h3> <!-- Kattintható link, ami a file_name-t mutatja -->
            <p>${highlightedText}</p>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

// A keresett szövegrész megjelenítése
function extractRelevantSnippet(text, query) {
    const regex = new RegExp(`(.{0,30}${query}.{0,30})`, 'gi');
    const match = text.match(regex);

    if (match) {
        return match[0].replace(query, `<mark>${query}</mark>`);
    }

    return 'A keresett kifejezés nem található.';
}


initializeSearch();
