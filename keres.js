// Itt tároljuk az indexált adatokat
const pages = [
  { title: "Oldal 1", content: "Ez egy példa szöveg, amely az Oldal 1-en található." },
  { title: "Oldal 2", content: "Ez a második oldal szövege, amely más információkat tartalmaz." }
];

// js-search beállítása
const Searcher = new JsSearch.Search('title');
Searcher.addIndex('content');
pages.forEach(page => Searcher.addDocument(page));

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
