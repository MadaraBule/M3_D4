fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(books => {
        console.log(books);
    })