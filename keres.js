let searchIndex = [];

fetch('output.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = data;
  })
  .catch(error => console.error("Hiba történt a JSON fájl betöltésekor:", error));

function searchContent() {
    const query = document.getElementById("searchQuery").value.toLowerCase(); // Keresett kifejezés
    const results = searchIndex.filter(page => {
        return page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query);
    });

    displayResults(results, query); // Átadjuk a keresett kifejezést is
}

function displayResults(results, query) {
    const resultContainer = document.getElementById("results");
    resultContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultContainer.innerHTML = "Nincs találat!";
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement("li");
        const link = document.createElement("a");
        link.href = result.url;
        link.textContent = result.title;
        link.target = "_blank"; 

        // Kiemelés a keresett kifejezéssel
        const regex = new RegExp(query, 'gi');
        const highlightedTitle = result.title.replace(regex, match => `<span class="highlight">${match}</span>`);
        resultElement.innerHTML = `<a href="${result.url}" target="_blank">${highlightedTitle}</a>`;
        
        resultContainer.appendChild(resultElement);
    });
}
