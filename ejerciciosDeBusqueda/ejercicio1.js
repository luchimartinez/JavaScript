'use strict'

//Hacer un programa que pida dos numeros y diga si son mayores, menores o iguales
//Si lo introducido no es un numero o son menores o iguales q 0 que vuelva a pedir los datos

 var num1 = parseInt(prompt("Por favor ingrese un numero", 1));
while (isNaN(num1)|| num1 <=0){   //PREGUNTA SI NO ES UN NUMERO
    num1 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))
}
 var num2 = parseInt(prompt("Ingrese otro numero", 2));

 while (isNaN(num2) || num2 <=0){
    num2 = parseInt(prompt("Por favor introduzca un numero mayor a 0"))
}

console.log(num1+" " + num2);

 if (num1 == num2){
     console.log("Son iguales");
 } else if (num1 < num2){
    console.log(num2 + " es mayor");
 } else{
     console.log(num1 + " es mayor");
 }