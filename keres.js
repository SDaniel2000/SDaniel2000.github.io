         // Adatok betöltése
async function loadJSON() {
    try {
        const response = await fetch('output.json'); 
        if (!response.ok) {
            throw new Error('Nem sikerült betölteni a JSON-t.');
        }
        return await response.json();
    } catch (error) {
        console.error('Hiba', error);
        return [];
    }
}


async function Search() {
    try {
        const data = await loadJSON();

        const search = new JsSearch.Search('url'); 
        search.addIndex('content'); 
        search.addDocuments(data); 

        
        document.getElementById('search-input').addEventListener('input', () => {
            const query = document.getElementById('search-input').value.trim();
            const results = search.search(query);

           
            displayResults(results, query);
        });
    } catch (error) {
        console.error('Hiba', error);
    }
}





function displayResults(results, query) {
    const resultsContainer = document.getElementById('result-container');
    resultsContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultsContainer.textContent = 'Nincs találat...';
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');

        const highlightedText = part_Of_Text(result.content, query);

        resultElement.innerHTML = `
            <h3><a href="${result.url}" target="_blank">${result.file_name}</a></h3>
            <p>${highlightedText}</p>
        `;

        resultsContainer.appendChild(resultElement);
    });
}





function part_Of_Text(text, query) {
    const regex = new RegExp(`(.{0,30}${query}.{0,30})`, 'gi');
    const match = text.match(regex);

    if (match) {
        return match[0].replace(query, `<mark>${query}</mark>`);
    }
    return 'A keresett szövegrész nem található.';
}

Search();
