fetch("https://striveschool-api.herokuapp.com/books", { method: "GET" })
    .then(response => response.json())
    .then(books => {
        console.log(books);

        const row = document.querySelector(".row")

        row.innerHTML = books
            .map(books => `
                                    <div class="col-sm-2">
                                        <div id="the-books" class="card">
                                                <img src=${books.img} class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${books.title}</h5>
                                                    <p class="card-text">€ ${books.price}</p>
                                                    <p class="card-text">${books.category}</a>
                                                    <button type="button" id="addCart" class="btn btn-light">Add to Cart</button>
                                                    <button type="button" id="skip" class="btn btn-light">Skip</button>
                                                </div>
                                        </div>
                                    </div>`)
        let removeCard = document.querySelectorAll(".card")
        removeCard.forEach(card => {
            card.addEventListener("click", function (e) {
                if (e.target.id === "addCart") {
                    console.log("added to cart")
                } else if (e.target.id === "skip") {
                    card.remove()
                }
            })
        })
    })
    .catch(err => console.log(err))

