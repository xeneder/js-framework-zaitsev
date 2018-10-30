fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=2018-01-01&api-key=c4e949022c20404690f87a13c0d8e240')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        json.results.lists.forEach(function(element) {
            console.log(element.display_name + ': ' + element.books.length);
        });
    });
