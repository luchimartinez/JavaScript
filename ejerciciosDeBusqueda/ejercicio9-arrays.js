'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar todos los elementos del array en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Hacer una busqueda de un valor introducido por el usuario y q nos diga si esta en el array y su posicion
*/

//1

/* var num1 = parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num1)){
    num1 = parseInt(prompt("Por favor, introduce un NUMERO"));
}
var num2 = parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num2)){
    num2 = parseInt(prompt("Por favor, introduce un NUMERO"));
}
var num3 = parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num3)){
    num3 = parseInt(prompt("Por favor, introduce un NUMERO"));
}
var num4 = parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num4)){
    num4 = parseInt(prompt("Por favor, introduce un NUMERO"));
}
var num5 = parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num5)){
    num5 = parseInt(prompt("Por favor, introduce un NUMERO"));
}
var num6= parseInt(prompt("Por favor, introduce un numero"));
while (isNaN(num6)){
    num6 = parseInt(prompt("Por favor, introduce un NUMERO"));
}

var numeros = [num1, num2, num3, num4,num5,num6]; */

var numeros = new Array (6);
//var numeros = [];
var aux;

for(var i=0; i<numeros.length; i++){ // con la otra manera hay q harcodear hasta donde recorre
    aux = parseInt(prompt("Por favor, introduce un numero"));
        while (isNaN(aux)){
            aux = parseInt(prompt("Por favor, introduce un NUMERO"));
        }
    //numeros[i]= numeros.push(aux);    
    numeros[i] = aux;
}


//2 

document.write ("<h1>"+"Los numeros que ingreso son: "+"</h1>");
document.write("<ul>");

for (numero in numeros){
    document.write("<li>"+numeros[numero]+"</li>");
}

document.write("</ul>");

console.log("Usted ingreso los siguientes numeros");
for (var numero in numeros){
    console.log(numeros[numero]);
}

//3

numeros.sort();

console.log("Los numero ordenados quedan asi ");

console.log(numeros.sort(function (a, b){
        return a - b}));

//4

console.log("Los numeros invertidos quedan asi: ");

console.log(numeros.reverse());

//5

console.log("El array tiene "+ numeros.length+ " elementos");

//6

var valor = parseInt(prompt("Por favor, introduce un numero a encontrar en el array"));
while (isNaN(valor)){
    valor = parseInt(prompt("Por favor, introduce un NUMERO a encontrar en el array"));
}

var busqueda = numeros.find(numero => numero == valor);

if(isNaN(busqueda)){
    console.log("El valor no se encontro");
} else {
    //se puede ahorrar esta variable si en la busqueda hacemos findIndex q si lo encuentra guarda la 
    //posicion y si no lo encunetra devuelve -1 
    var indice = numeros.indexOf(valor);
    console.log ("El numero q ingreso se encuentra en la posicion "+ indice);
}

