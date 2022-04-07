fetch("https://striveschool-api.herokuapp.com/books", { method: "GET" })
    .then(response => response.json())
    .then(books => {
        console.log(books);

        const row = document.querySelector(".row")

        row.innerHTML = books
            .map(books => `
                                    <div class="col-sm-4">
                                        <div class="card">
                                                <img src=${books.img} class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${books.title}</h5>
                                                    <p class="card-text">€ ${books.price}</p>
                                                    <p class="card-text">${books.category}</a>
                                                    <button type="button" class="btn btn-light">Add to Cart</button>
                                                    <button type="button" class="btn btn-light">Skip</button>
                                                </div>
                                        </div>
                                    </div>`)
    })
    .catch(err => console.log(err))