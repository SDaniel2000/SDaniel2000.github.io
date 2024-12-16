fetch('output.json')
  .then(response => response.json())
  .then(data => {
    const search = new JsSearch.Search('url'); // A referencia mező megadása
    search.addField('title');
    search.addField('content');
    search.addDocuments(data);

    document.getElementById("searchBox").addEventListener("input", function() {
      let query = this.value;
      let results = search.search(query);
      displayResults(results);
    });

    function displayResults(results) {
      let resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";
      results.forEach(result => {
        let item = document.createElement("div");
        let doc = data.find(d => d.url === result.id);
        item.innerHTML = `<a href="${doc.url}" target="_blank">${doc.title}</a> - Snippet: ${getSnippet(doc.content)}`;
        resultsDiv.appendChild(item);
      });
    }

    function getSnippet(content) {
      return content.slice(0, 100);  // Kivonat
    }
  });
