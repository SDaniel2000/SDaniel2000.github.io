$.jssearch = {
  search: function(query) {
      var words = $.jssearch.tokenizeString(query);
      var result = [];

      if (words.length == 0) {
          return result;
      }

      result = $.jssearch.searchForWords(words);

      var res = [];
      for (var i in result) {
          res.push(result[i].file);
      }

      return res;
  },

  searchForWords: function(words) {
      var result = [];
      words.forEach(function(word) {
          if ($.jssearch.index[word.t]) {
              $.jssearch.index[word.t].forEach(function(file) {
                  if (!result.includes($.jssearch.files[file.f])) {
                      result.push({
                          file: $.jssearch.files[file.f]
                      });
                  }
              });
          }
      });
      return result;
  },

  tokenizeString: function(string) {
      var regex = /[a-zA-Z0-9]+/g;
      var matches = string.match(regex);
      var result = [];
      if (matches) {
          matches.forEach(function(match) {
              result.push({t: match.toLowerCase()});
          });
      }
      return result;
  }
};

function searchContent() {
  var query = document.getElementById("searchInput").value;
  var results = $.jssearch.search(query);

  var resultContainer = document.getElementById("searchResults");
  resultContainer.innerHTML = '';

  if (results.length > 0) {
      results.forEach(function(file) {
          var div = document.createElement('div');
          div.classList.add('result-item');
          div.innerHTML = `<a href="${file}">${file}</a>`;
          resultContainer.appendChild(div);
      });
  } else {
      resultContainer.innerHTML = 'Nincs találat!';
  }
}
