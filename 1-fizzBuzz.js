/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */



/*


Problema determinante o no determinante 

Ciclo a utlizar for 

se debe incluir tanto el iterador como el numero de la condicion

Condiciones

Cada impresión debe tener un salto de linea es decir \n

ambos son multiplos si su modulo es 0 es decir division exacta 


*/

console.log("Resolviendo el problema")

for(let i = 0; i<=100; i++){

    if(i % 3 ==0  &&  i % 5 ==0){

        console.log("FizzBuzz \n")

    }else if(i % 3 ==0){

        console.log("Fizz \n")
    }else if(i % 5 ==0){

        console.log("Buzz \n")
    }
    
    
}




























