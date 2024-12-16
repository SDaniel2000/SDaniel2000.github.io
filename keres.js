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
        let doc = data.find(d => d.url === result.ref);
        item.innerHTML = `<a href="${result.ref}">Go to: ${doc.title}</a>`;
        resultsDiv.appendChild(item);
      });
    }

  });
