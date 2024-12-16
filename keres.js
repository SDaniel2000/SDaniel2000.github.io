fetch('output.json')
  .then(response => response.json())
  .then(data => {
    // JsSearch indexálás
    let search = new JsSearch.Search('url');
    search.addIndex('title');
    search.addIndex('content');
    search.addDocuments(data);

    // Keresési esemény
    document.getElementById("searchBox").addEventListener("input", function() {
      let query = this.value;
      let results = search.search(query);
      displayResults(results);
    });

    // Eredmények megjelenítése
    function displayResults(results) {
      let resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
      results.forEach(result => {
        let item = document.createElement("div");
        item.innerHTML = `Title: <a href="${result.url}" target="_blank">${result.title}</a> - Snippet: ${getSnippet(result.url)}`;
        resultsDiv.appendChild(item);
      });
    }

    function getSnippet(url) {
      let doc = data.find(d => d.url === url);
      return doc.content.slice(0, 1000);  // Kivonat
    }
  });
