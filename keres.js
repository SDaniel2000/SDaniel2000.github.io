fetch('output.json')
  .then(response => response.json())
  .then(data => {
    let idx = lunr(function() {
      this.field('title');
      this.field('content');
      this.field('url');
      this.ref('url');
      data.forEach(doc => this.add(doc));
    });

    document.getElementById("searchBox").addEventListener("input", function() {
      let query = this.value;
      let results = idx.search(query);
      displayResults(results);
    });

    function displayResults(results) {
      let resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
      results.forEach(result => {
        let item = document.createElement("div");
        let baseURL = 'https://example.com/';  // Az alap URL, ahonnan a fájlok elérhetők
        let fullURL = baseURL + result.ref;    // Teljes URL létrehozása
        item.innerHTML = `Title: <a href="${fullURL}" target="_blank">${result.ref}</a> - Snippet: ${getSnippet(result.ref)}`;
        resultsDiv.appendChild(item);
      });
    }
    

    function getSnippet(url) {
      let doc = data.find(d => d.url === url);
      return doc.content.slice(0, 100);  // Kivonat
    }
  });
