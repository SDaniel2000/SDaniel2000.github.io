// Feltételezzük, hogy a JSON fájl neve output.json
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
    const results = searchIndex.filter(page => {
        return page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query);
    });

    displayResults(results);
}

// Eredmények megjelenítése a keresés alapján
function displayResults(results) {
    const resultContainer = document.getElementById("searchResults");
    resultContainer.innerHTML = ''; // Eredmények törlése a régi keresés előtt

    if (results.length === 0) {
        resultContainer.innerHTML = "Nincs találat!";
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement("li");
        const link = document.createElement("a");
        link.href = result.url;
        link.textContent = result.title;
        resultElement.appendChild(link);
        resultContainer.appendChild(resultElement);
    });
}
