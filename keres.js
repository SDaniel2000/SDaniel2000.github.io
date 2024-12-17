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
  Searcher = new JsSearch.Search('title'); // Cím keresése
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
    li.innerHTML = `<strong>${result.title}</strong><br><span>${highlightMatch(result.content, query)}</span>`;
    resultsContainer.appendChild(li);
  });
}

// A keresett szöveg kiemelése
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span style="background-color: yellow;">$1</span>');
}
