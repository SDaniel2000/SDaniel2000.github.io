function searchContent() {
  // Ellenőrizzük, hogy az input mező létezik-e
  var query = document.getElementById("search-box");
  if (query) {
    var searchQuery = query.value; // Az input mező értéke

    // Keresési logika itt:
    console.log(searchQuery); // Debug: A keresett kifejezés kiíratása

    // Például a keresés eredményei
    var results = performSearch(searchQuery);
    displayResults(results);
  } else {
    console.error("Input mező nem található.");
  }
}

function performSearch(query) {
  // Képzeld el, hogy ez egy keresési logika, ami a megfelelő adatokat adja vissza
  var sampleData = [
    "HTML Tutorial",
    "CSS Basics",
    "JavaScript Guide",
    "React and Vue",
    "Web Development"
  ];

  return sampleData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

function displayResults(results) {
  // A keresési eredmények megjelenítése
  var resultContainer = document.getElementById("search-results");
  resultContainer.innerHTML = ""; // Töröljük a korábbi eredményeket

  results.forEach(result => {
    var li = document.createElement("li");
    li.textContent = result;
    resultContainer.appendChild(li);
  });
}
