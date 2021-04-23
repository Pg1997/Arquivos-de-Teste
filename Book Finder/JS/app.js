
var books;

var form = document.querySelector('form');

function searchBook(search_term){
    fetch('https://www.googleapis.com/books/v1/volumes?q='+search_term+'&key=AIzaSyABXfAJhj66ruAJgab8ojEaFS9znrIJBFQ')
    .then(response => response.json())
    .then(data => books = data)
    .catch(err => console.log(err));
}


function createCard(book){
    card = `<div class="book">                
                <img class="img" src="${book.volumeInfo.imageLinks.thumbnail}">                
                <div class="info">                    
                    <div><strong>Titilo: </strong> ${book.volumeInfo.title}</div>
                    <div><strong>Editora: </strong> ${book.volumeInfo.publisher}</div>
                    <!--<div><strong>Data Publi.: </strong> 20/01/1997</div>-->
                </div>
            </div>`;

    return card;
}


form.addEventListener('onSubmited', )


