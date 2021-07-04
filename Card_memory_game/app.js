'use strict'

var cards = document.querySelectorAll('.card');
var verified = false;
var figure;


[...cards].forEach(btn => {
    btn.addEventListener('click', handleToogleCard);
});


function handleToogleCard(e){      

    if(e.currentTarget.children[0].style.visibility == 'visible'){
        setTimeout(toogleCard.bind(null, e.currentTarget, false), 1000);              
    }else{
        toogleCard(e.currentTarget, true);
    }

    if(verified == false){
        figure = e.currentTarget;
    }else{
        if(e.currentTarget.children[0].innerHTML != figure.children[0].innerHTML){
            setTimeout(toogleCard.bind(null, e.currentTarget, false), 3000);
            setTimeout(toogleCard.bind(null, figure, false), 3000);                 
        }
    }

    verified = !verified;    
    
} 


function toogleCard(target, a){
    if(a){
        //TRUE mostra carta
        target.children[0].style.visibility = 'visible';
        target.children[1].style.visibility = 'hidden';  
    }else{
        //FALSE vira carta
        target.children[0].style.visibility = 'hidden';  
        target.children[1].style.visibility = 'visible';
    }
}
