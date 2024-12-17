let searchIndex = [];
let query = "";  // Globálisan elérhető query változó

// Az JSON fájl betöltése
fetch('output.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data;
  })
  .catch(error => console.error("Hiba történt a JSON fájl betöltésekor:", error));

// Keresés a megadott kifejezés alapján
function searchContent() {
    query = document.getElementById("searchQuery").value.toLowerCase();
    const results = searchIndex.filter(page => {
        return page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query);
    });

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
        link.href = result.url;
        link.textContent = result.title;
        link.target = "_blank";  // Új ablakban nyitás

        // Cím kiemelése a keresett szóra
        const regex = new RegExp(query, 'gi');
        const highlightedTitle = result.title.replace(regex, match => `<span class="highlight">${match}</span>`);
        resultElement.innerHTML = `<a href="${result.url}" target="_blank">${highlightedTitle}</a>`;
        
        resultContainer.appendChild(resultElement);
    });
}
