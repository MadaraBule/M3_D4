fetch("https://striveschool-api.herokuapp.com/books", { method: "GET" })
    .then(response => response.json())
    .then(books => {
        console.log(books);

        const row = document.querySelector(".row3")

        row.innerHTML = books
            .map(books => `
                                    <div class="col-sm-2">
                                        <div id="the-books" class="card">
                                                <img src=${books.img} class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h5 class="card-title">${books.title}</h5>
                                                    <p class="card-text">€ ${books.price}</p>
                                                    <p class="card-text">${books.category}</a>
                                                    <button type="button" class="btn btn-dark addCart">Add to Cart</button>
                                                    <button type="button"  class="btn btn-danger skip">Skip</button>
                                                </div>
                                        </div>
                                    </div>`)
            .join("")
        //search thing

        //crt and skip buttons
        let removeCard = document.querySelectorAll(".card")
        let row2 = document.querySelector(".row2")
        removeCard.forEach(card => {
            card.addEventListener("click", function (e) {
                console.log("target", e.target)
                console.log("currentTarget", e.currentTarget)
                if (e.target.classList.contains("addCart")) {
                    const copy = card.cloneNode(true)
                    row2.appendChild(copy);
                } else if (e.target.classList.contains("skip")) {
                    e.currentTarget.remove()
                }
            })
        })
    })
    .catch(err => console.log(err))