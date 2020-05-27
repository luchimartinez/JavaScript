'use strict'

//Hacer una calculadora que dados dos numeros muestre los resultados de sumarlos, restarlos, dividirlos y multiplicarlos

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


    document.write("<h1>Resultados para operaciones entre "+num1+" y "+num2+" :</h1>");

    var resultado = "Suma: "+ (num1+num2)+ "<br>"+
                    "Resta: "+ (num1-num2)+ "<br>"+
                    "Multiplicacion: "+(num1*num2)+ "<br>"+
                    "Division: "+(num1/num2)+ "<br>";

//el br es para html si quiero un salto de linea en pantalla tengo que utilizar un \n
    var resultadoAlert = "Suma: "+ (num1+num2)+ "\n"+
                    "Resta: "+ (num1-num2)+ "\n"+
                    "Multiplicacion: "+(num1*num2)+ "\n"+
                    "Division: "+(num1/num2)+ "\n";


document.write(resultado);
console.log(resultadoAlert);
alert(resultadoAlert);
