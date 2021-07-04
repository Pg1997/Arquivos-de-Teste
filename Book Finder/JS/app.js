
var books;

var form = document.getElementById('search-button');

//USANDO .then()
// function searchBook(){
//     // console.log(document.querySelector('#search-value').value);
    
//     var search_term = document.querySelector('#search-value').value;
//     fetch('https://www.googleapis.com/books/v1/volumes?q='+search_term+'&key=AIzaSyABXfAJhj66ruAJgab8ojEaFS9znrIJBFQ')
//     .then(response => response.json())
//     .then(data => createCard(data))
//     .catch(err => console.log(err));
// }

//Usando async await
async function searchBook(){      
    var search_term = document.querySelector('#search-value').value;
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q='+search_term+'&key=AIzaSyABXfAJhj66ruAJgab8ojEaFS9znrIJBFQ')
    const data = await response.json();
    createCard(data);    
}


function createCard(book){
    console.log(arguments);
    var search_result = document.querySelector('.search-result');    
    var total_result = document.querySelector('#totalizador'); 
    search_result.innerHTML = '';
    total_result.innerHTML = '';    
    card = '';

    if(!book.items){
        card = `<h2>Não foi encontrado resultados para ${document.querySelector("#search-value").value}</h2>`;        
    }else{
        if(book.items.length > 0)
        {
            total_result.innerHTML = `<h4>Foram encontrados ${book.items.length} livro(s)</h4>`;
            book.items.forEach(e => {

                // console.log(e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.smallThumbnail : null); 
                card += `<div class="book">                
                            <img class="img" src="${e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.smallThumbnail : './Img/images.png'}">                
                            <div class="info">                    
                                <div><strong>Titilo: </strong> ${e.volumeInfo.title}</div>
                                <div><strong>Editora: </strong> ${e.volumeInfo.publisher}</div>
                                <!--<div><strong>Data Publi.: </strong> 20/01/1997</div>-->
                            </div>
                        </div>`
            });
        }else
        {
            card = `<h2>Não foi encontrado resultados para ${document.querySelector("#search-value").value}</h2>`;
        }
    }

    search_result.innerHTML = card;    
}



form.addEventListener('click', searchBook);


var button = document.querySelector('#search-button');

button.addEventListener('mousedown', () => {button.classList.add("button-onClick")});
button.addEventListener('mouseup', () => {button.classList.remove("button-onClick")});
