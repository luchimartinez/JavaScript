'use strict'

//Que nos diga si el numero ingresado es par o impar

var num;

num= parseInt(prompt("Introduzca un numero mayor a 0", 3));
    while (isNaN(num)){   //PREGUNTA SI NO ES UN NUMERO
        num = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }

if (num%2 == 0){
    alert("Es par");
}else{
    alert("Es impar");
}