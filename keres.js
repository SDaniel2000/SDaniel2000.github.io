// Feltételezzük, hogy a JSON fájl neve output.json
let searchIndex = new JsSearch.Search('id'); // Az 'id' a dokumentum egyedi azonosítója

// Az JSON fájl betöltése
fetch('output.json')
  .then(response => response.json())
  .then(data => {
    searchIndex.addIndex('title');
    searchIndex.addIndex('content');
    searchIndex.addDocuments(data);
  })
  .catch(error => console.error("Hiba történt a JSON fájl betöltésekor:", error));

// Keresés a megadott kifejezés alapján
function searchContent() {
    const query = document.getElementById("searchQuery").value;
    const results = searchIndex.search(query);

    displayResults(results);
}

// Eredmények megjelenítése a keresés alapján
function displayResults(results) {
    const resultContainer = document.getElementById("results");
    resultContainer.innerHTML = ''; // Eredmények törlése a régi keresés előtt

    if (results.length === 0) {
        resultContainer.innerHTML = "Nincs találat!";
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement("li");

        // Link létrehozása
        const link = document.createElement("a");
        link.href = result.url;  // Hivatkozás hozzáadása
        link.textContent = result.title;  // A cím szövege
        link.target = "_blank";  // Új ablakban nyitás (opcionális)

        // Cím kiemelése a keresett szóra
        const regex = new RegExp(query, 'gi');
        const highlightedTitle = result.title.replace(regex, match => `<span class="highlight">${match}</span>`);

        resultElement.innerHTML = `<a href="${result.url}" target="_blank">${highlightedTitle}</a>`;
        resultContainer.appendChild(resultElement);
    });
}
