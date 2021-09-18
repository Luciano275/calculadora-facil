# Calculadora sencilla/basica
A Continuacion se vera un ejemplo sobre una calculadora que pueda realizar funciones basicas de la matematica, por ejemplo, ***sumar, restar, multiplicar y dividir***. Son funciones bastantes basica y utiles para tu primer calculadora.
## index.html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="calculator">
            <div class="display"></div>
            <div class="row">
                
                <button class="clearAll operador">C</button>
                <button class="clear operador">&larr;</button>
                <button class="operador numero">/</button>
                <button class="operador numero">*</button>

                <button class="numero">7</button>
                <button class="numero">8</button>
                <button class="numero">9</button>
                <button class="operador numero">-</button>

                <button class="numero">4</button>
                <button class="numero">5</button>
                <button class="numero">6</button>
                <button class="operador numero">+</button>

                <button class="numero">1</button>
                <button class="numero">2</button>
                <button class="numero">3</button>
                <button class="igual operador">=</button>

                <button class="numero cero">0</button>
                <button class="numero">.</button>

            </div>
        </div>
    </div>

    <script src="index.js" defer></script>
</body>
</html>
```
Ahora se mostrara el codigo del archivos text/css denominado style.css
## style.css
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Tahoma, Arial, sans-serif;
    overflow-x: hidden;
    background: #12c2e9;
    background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
}

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculator{
    border: none;
}

.calculator .row{
    display: grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
}

.calculator .row .igual{
    grid-column: 4;
    grid-row: 4 / 6;
}

.calculator .row .cero{
    grid-column: 1 / 3;
    grid-row: 5;
    background: rgba(255, 255, 255, 0.3) !important;
}

.calculator .display{
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7em;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    align-items: flex-start;
    word-break: break-all;
    max-width: 320px;
    max-height: 100px;
    overflow-x: hidden;
    overflow-y: scroll;
}

.calculator .display::-webkit-scrollbar{
    width: 10px;
    background: rgba(0, 0, 0, 0.8)
}

.calculator .display::-webkit-scrollbar-thumb{
    background: rgba(200, 200, 200, 0.5);
    border: 2px solid rgba(0, 0, 0, 0.8);
    border-radius: 10px;
}

.calculator .row button{
    border: none;
    font-size: 1.3em;
}

.calculator .row button:focus{
    outline: none;
}

.calculator .row .operador{
    background: rgba(0,0,0,0.2) !important;
}

.calculator .row .numero{
    background: rgba(255,255,255,0.1);
}

.calculator .row .numero:hover{
    background: rgba(255,255,255,0.6) !important;
}

.calculator .row .operador:hover{
    background: rgba(0,0,0,0.6) !important;
    color: #fff;
}

html{
    scroll-behavior: smooth;
}
```
Por ultimo se mostrara la logica, o el archivo .js, en resumido, el archivo .js es aquel que le proporciona a la calculadora poder realizar aquellas funciones basicas: ***sumar, restar, multiplicar y dividir***.
## index.js
```Javascript
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
```
