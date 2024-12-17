const index = {}; // Az index.json fájl tartalmát ide töltöd be

// Beolvassuk az indexet
fetch('index.json')
    .then(response => response.json())
    .then(data => {
        index.files = data;
    });

function searchContent(query) {
    let queryWords = query.split(/\s+/).map(word => word.toLowerCase());
    let results = [];

    index.files.forEach(file => {
        queryWords.forEach(word => {
            if (file.title.toLowerCase().includes(word)) {
                results.push({
                    file: file,
                    title: file.title,
                    url: file.url
                });
            }
        });
    });

    displayResults(results);
}

function displayResults(results) {
    let resultList = document.getElementById('results');
    resultList.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.href = result.url;  // Link to the page
        link.textContent = result.title;  // Text for the link
        li.appendChild(link);
        resultList.appendChild(li);
    });
}

// Keresési esemény kezelés
document.getElementById('search-input').addEventListener('input', function() {
    let query = this.value;
    searchContent(query);
});
