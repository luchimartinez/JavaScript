'use strict'

//Mostrar todos los numeros impares que hay entre dos numeros ingresados por teclado

var num1;
var num2;

num1= parseInt(prompt("Introduzca un numero mayor a 0", 3));
    while (isNaN(num1)){   //PREGUNTA SI NO ES UN NUMERO
        num1 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }

num2= parseInt(prompt("Introduzca otro numero mayor a 0", 2));
    while (isNaN(num2)){   //PREGUNTA SI NO ES UN NUMERO
        num2 = parseInt(prompt("Por favor introduzca un numero mayor a 0 y menor q el primero"))  
    }

    document.write("<h1>Entre "+num1+" y "+num2+" estan los numeros impares son los siguientes:</h1>") 

    for(var i=num1; i<num2; i++){
        if(i %2== 1){
            document.write(i+ "<br>");
        }
    }