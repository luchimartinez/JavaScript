'use strict'

//Mostrar todos los numeros que hay entre dos que nos da el usuario

var num1;
var num2;

num1= parseInt(prompt("Introduzca un numero mayor a 0", 1));
    while (isNaN(num1)){   //PREGUNTA SI NO ES UN NUMERO
        num1 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }

num2= parseInt(prompt("Introduzca otro numero mayor a 0", 2));
    while (isNaN(num2)){   //PREGUNTA SI NO ES UN NUMERO
        num2 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }

document.write("<h1>Entre "+num1+" y "+num2+" estan los siguientes numeros:</h1>")    
for(var i = num1+1; i<num2; i++){
    document.write(i+ "<br>");
}