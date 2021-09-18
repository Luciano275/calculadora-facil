const numeros = document.querySelectorAll('.numero');
const display = document.querySelector('.display');
const igual = document.querySelector('.igual');
const clearAll = document.querySelector('.clearAll');
const clear = document.querySelector('.clear');
var valor = '';

function printNumbers(num){
    if(num !== '='){
        display.innerHTML += num;
    }
}

function borrarTodo(){
    display.innerHTML = '';
    valor = '';
}

function borrar(value){
    let temp = value.slice(0, -1);
    valor = temp;
    display.innerHTML = temp;
}

function calcular(numbersToCalc){
    try{
        let res = eval(numbersToCalc.toString());
        display.innerHTML = res;
    }catch(e){
        display.innerHTML = 'Error!';
        setTimeout(() => {
            borrarTodo();
        }, 2000);
    }
}

numeros.forEach((numero) => {
    numero.addEventListener('click', (e) => {
        printNumbers(e.target.innerHTML)
        valor += e.target.innerHTML;
    })
});

clearAll.addEventListener('click', () => {
    borrarTodo();
});

clear.addEventListener('click', () => {
    borrar(valor)
});

igual.addEventListener('click', () => {
    calcular(display.textContent);
})