document.addEventListener('DOMContentLoaded', function() {
    // JSON adat, amit keresni fogunk
    const jsonData = [
        {
            "file_name": "index.html",
            "url": "https://SDaniel2000.github.io/index.html",
            "content": "Local index - HTTrack Website Copier HTTrack Website Copier - Open Source offline browser Local index - HTTrack Index of locally available sites: · Alsacréations : Actualités et tutoriels web, HTML, CSS, JavaScript Mirror and index made by HTTrack Website Copier [XR&CO'2008] © 2008 Xavier Roche & other contributors - Web Design: Leto Kauler."
        },
        {
            "file_name": "index.html",
            "url": "https://SDaniel2000.github.io/www.alsacreations.com/index.html",
            "content": "Alsacréations : Actualités et tutoriels web, HTML, CSS, JavaScript 🥝 Un projet pro dans les cartons ? Faites appel à notre agence web ! L’agence alsacreations.fr Dernières actualités Revue de la définition du support des navigateurs Article web Il a toujours été complexe de définir avec précision un niveau de support navigateur dans les projets web, d'autant plus avec la variété des plateformes…"
        }
    ];

    // BloomySearch kereső inicializálása
    const search = new BloomySearch(jsonData.map(item => item.content));

    // Keresési input esemény
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value;
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        // Keresés végrehajtása
        const results = search.query(query);

        // Eredmények megjelenítése
        results.forEach(result => {
            const li = document.createElement('div');
            li.classList.add('result-item');
            const fileName = jsonData.find(item => item.content === result).file_name;
            const resultText = result.substring(0, 100) + "...";  // Eredmény rövidítése
            li.innerHTML = `<strong>${fileName}</strong>: ${resultText}`;
            resultsContainer.appendChild(li);
        });
    });
});
