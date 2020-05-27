'use strict'

//Uutilizando un bucle mostrar la media y la suma de los resultados hasta introducir un numero
//negativo y ahi mostrar el resultado

var num1;
var suma = 0;
var acum = 0;
var promedio;
var preguntar = true;

while (preguntar){
num1 = parseInt(prompt("Por favor ingrese un numero", 1));
    while (isNaN(num1)){   //PREGUNTA SI NO ES UN NUMERO
        num1 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }
if (num1 < 0){
    preguntar = false;
} else {
    suma +=num1;
    acum++;
}
}
promedio = suma / acum;
console.log("La media es de "+promedio);
console.log("La suma total es de "+suma);