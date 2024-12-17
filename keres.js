let searchIndex = [];

fetch('output_data.json')  // A Python program által generált JSON fájl
  .then(response => response.json())
  .then(data => {
    searchIndex = data.pages;  // Az adatok a JSON fájlból
  });

function searchContent() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = searchIndex.filter(page => 
    page.content.toLowerCase().includes(query) || page.title.toLowerCase().includes(query)
  );

  displayResults(results);
}

function displayResults(results) {
  const resultList = document.getElementById('results');
  resultList.innerHTML = ''; // Az előző találatok törlése

  if (results.length === 0) {
    resultList.innerHTML = '<li>No results found</li>';
    return;
  }

  results.forEach(result => {
    const listItem = document.createElement('li');
    listItem.classList.add('result-item');
    listItem.innerHTML = `<strong>${result.title}</strong><br>${result.content.slice(0, 150)}...<br><a href="${result.url}" target="_blank">Read more</a>`;
    resultList.appendChild(listItem);
  });
}
