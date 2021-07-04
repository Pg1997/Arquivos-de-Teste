
const form = document.querySelector('form');
const todo_list = document.querySelector('#todo-list');
const todo_count = document.querySelector('.todo-count');
const filter = document.querySelector('#filter');

document.querySelector('#clear').addEventListener('click', () => {
    todo_list.innerHTML = '';
    finished_itens = 0;
    todo_count.innerHTML = `${finished_itens} items left`;
});

document.querySelector('#select_all').addEventListener('click', function() {    
    if(this.checked){
        todo_list.childNodes.forEach((a) => {            
            a.firstChild.firstChild.checked = true;
            a.firstChild.childNodes[1].classList.add('finished');
        });
    }else{
        todo_list.childNodes.forEach((a) => {            
            a.firstChild.firstChild.checked = false;
            a.firstChild.childNodes[1].classList.remove('finished');
        });
    }
});

var finished_itens = 0;

todo_list.addEventListener('click', taksHandle);
form.addEventListener('submit', addTask);
filter.addEventListener('click', filterHandle);

function addTask(e){
    e.preventDefault();
    
    var li = document.createElement('LI');
    var div = document.createElement('DIV');
    var ul = document.getElementById('todo-list');

    div.innerHTML = `<input type="checkbox" class="check"><label>${document.getElementById('input-task').value}</label>
                     <button><i class="fas fa-times"></i></button>
                    `;

    div.classList.add('task');                   
                    
    li.appendChild(div);    
    ul.appendChild(li);    

    finished_itens++;
    todo_count.innerHTML = `${finished_itens} items left`;
    
}


function taksHandle(e){
    e.stopPropagation();   

    if(e.target.nodeName == 'INPUT'){        
        var div = e.target.nextSibling;
        
        if(e.target.checked){
            div.classList.add('finished');
        }else{
            div.classList.remove('finished');
        }        
                     
    }

    if(e.target.nodeName == 'I' || e.target.nodeName == 'BUTTON'){
        e.target.parentNode.parentNode.remove();
        finished_itens--;
        todo_count.innerHTML = `${finished_itens} items left`;
    }

}

function filterHandle(e){
    console.log(e.target.innerHTML);
    if(e.target.innerHTML == 'All'){
        console.log('1');
        todo_list.childNodes.forEach((a) => {
            a.firstChild.style.display = 'flex';
        });
    }else if(e.target.innerHTML == 'Active'){
        console.log('1');
        todo_list.childNodes.forEach((a) => {
            if(!a.firstChild.firstChild.checked){
                a.firstChild.style.display = 'flex';
            }else{
                a.firstChild.style.display = 'none';
            }
        });
    }else if(e.target.innerHTML == 'Completed'){
        console.log('1');
        todo_list.childNodes.forEach((a) => {
            if(a.firstChild.firstChild.checked){
                a.firstChild.style.display = 'flex';
            }else{
                a.firstChild.style.display = 'none';
            }
        });
    }

}


