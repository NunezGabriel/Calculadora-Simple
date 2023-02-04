const result = document.querySelector('#result')
const suma = document.querySelector('.suma')
const resta = document.querySelector('.resta')
const multiplicacion = document.querySelector('.mult')
const division = document.querySelector('.divi')
const potenciacion = document.querySelector('.poten')
const porcentaje = document.querySelector('.porcent')
const input1 = document.querySelector('.one')
const input2 = document.querySelector('.two')

let calculo;
suma.addEventListener('click',sumar)
resta.addEventListener('click',restar)
multiplicacion.addEventListener('click',multiplicar)
division.addEventListener('click',dividir)
potenciacion.addEventListener('click',potenciar)
porcentaje.addEventListener('click',sacarPorcentaje)

function sumar(){
    calculo = parseFloat(input1.value) + parseFloat(input2.value)
    result.innerHTML = calculo
}
function restar(){
    calculo = parseFloat(input1.value) - parseFloat(input2.value)
    result.innerHTML = calculo
}
function multiplicar(){
    calculo = parseFloat(input1.value) * parseFloat(input2.value)
    result.innerHTML = calculo
}
function dividir(){
    calculo = parseFloat(input1.value) / parseFloat(input2.value)
    result.innerHTML = calculo
}
function potenciar(){
    calculo = parseFloat(input1.value) ** parseFloat(input2.value)
    result.innerHTML = calculo
}
function sacarPorcentaje(){
    calculo = (parseFloat(input1.value)/100) * parseFloat(input2.value)
    result.innerHTML = calculo
}
