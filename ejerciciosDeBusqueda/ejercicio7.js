'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

var num;

num= parseInt(prompt("Intrisuzca un numero para saber su tabla de multiplicar", 3));
    while (isNaN(num)){   //PREGUNTA SI NO ES UN NUMERO
        num = parseInt(prompt("Por favor introduzca un numero mayor a 0"))  
    }
    document.write("<h1>La tabla de multiplicar para "+num+" es la siguiente :</h1>");
   
    for(var i=1; i<=10; i++){
        document.write(num+"x"+i+"="+num*i+ "<br>");     
    }