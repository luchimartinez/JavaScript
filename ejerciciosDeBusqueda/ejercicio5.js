'use strict'

//Mostrar todos los numeros divisores de un numero introducido por pantalla

var num;

num= parseInt(prompt("Introduzca un numero mayor a 0", 3));
    while (isNaN(num)){   //PREGUNTA SI NO ES UN NUMERO
        num = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }



var numDivisor;

document.write("<h1>Los numeros divisores de "+num+" son los siguientes :</h1>");

for(var i=num-1; i>0; i--){
    numDivisor = num%i;
    if(numDivisor == 0){
        document.write(i+ "<br>");
    }
}