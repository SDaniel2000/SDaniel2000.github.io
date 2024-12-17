let pages = [];

// JSON adatok betöltése
fetch('output.json')
  .then(response => response.json())
  .then(data => {
    pages = data;
    initializeSearch();
  })
  .catch(error => console.error('Hiba a JSON betöltésekor:', error));

// Keresőmotor beállítása
let Searcher;

function initializeSearch() {
  Searcher = new JsSearch.Search('title'); // Azonosító kulcs
  Searcher.addIndex('content'); // Tartalom indexelése
  pages.forEach(page => Searcher.addDocument(page));
}

// Keresési funkció
function search() {
  const query = document.getElementById('searchQuery').value;
  const results = Searcher.search(query);

  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Korábbi találatok törlése
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result.title;
    resultsContainer.appendChild(li);
  });
}
