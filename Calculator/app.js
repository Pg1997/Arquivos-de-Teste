
var buttons = document.querySelectorAll('.container .btn');
var display = document.querySelector('.display');
var numberOne = 0;
var numberTwo;
var op;
var clear;

display.innerHTML = '';
clear = false;

for(i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', handleButon);
}

function handleButon(){      
    switch(this.id){
        case 'btnnum':
            display.innerHTML += this.innerHTML;
            clearDisplay();             
        break;
        case 'btnC':
            clearFields();
        break;
        case 'btndivision':
            numberOne = parseFloat(display.innerHTML);
            op = '/';
            clearDisplay();
        break;
        case 'btnX':
            numberOne = parseFloat(display.innerHTML);
            op = '*';
            clearDisplay();
        break;
        case 'btnless':
            numberOne = parseFloat(display.innerHTML);
            op = '-';
            clearDisplay();
        break;
        case 'btnplus':
            numberOne = parseFloat(display.innerHTML);
            op = '+';
            clearDisplay();
        break;     
        case 'btnequal':
            numberTwo = parseFloat(display.innerHTML);  
            calculate();          
        break;   
        default:
            alert(this.innerHTML);        
    }
}

function clearFields(){
    clearDisplay();
    numberOne = 0;
    numberTwo = 0;
}

function clearDisplay(){         
    if(clear){
        display.innerHTML = '';
        clear = !clear;
    }   
}

function calculate(){
    console.log(numberOne, numberTwo, op);
    switch(op){
        case ('+'):
            display.innerHTML = numberOne + numberTwo;
        break;
        case ('-'):
            display.innerHTML = numberOne - numberTwo;
        break;
        case ('/'):
            display.innerHTML = numberOne / numberTwo;
        break;
        case ('*'):
            display.innerHTML = numberOne * numberTwo;
        break;
    }
}
