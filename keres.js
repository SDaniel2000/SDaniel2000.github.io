let searchIndex = [];

// Az JSON fájl betöltése
fetch('output.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data;
  })
  .catch(error => console.error("Hiba történt a JSON fájl betöltésekor:", error));

// Keresés a megadott kifejezés alapján
function searchContent() {
    const query = document.getElementById("searchQuery").value.toLowerCase();
    
    // A query változó escape-elése a speciális karakterek ellen
    const safeQuery = query.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, "\\$&");
    const regex = new RegExp(safeQuery, 'gi');
    
    const results = searchIndex.filter(page => {
        return regex.test(page.content.toLowerCase()) || regex.test(page.title.toLowerCase());
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
        link.href = result.url;  // Hivatkozás hozzáadása
        link.textContent = result.title;  // A cím szövege
        link.target = "_blank";  // Új ablakban nyitás (opcionális)

        // Cím kiemelése a keresett szóra
        const highlightedTitle = result.title.replace(regex, match => `<span class="highlight">${match}</span>`);
        const highlightedContent = result.content.replace(regex, match => `<span class="highlight">${match}</span>`);

        resultElement.innerHTML = `<a href="${result.url}" target="_blank">${highlightedTitle}</a>`;
        resultContainer.appendChild(resultElement);
    });
}
