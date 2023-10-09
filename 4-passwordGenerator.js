/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

console.log("------------------------")
console.log("GENERADOR DE CONTRASEÑAS")
console.log("------------------------")

console.log("La longitud para crear la contraseña es de")
console.log("Solo entre 8 y 16 de longitud")

let letters = "abcdefghijklmnñopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "#$%&/()¡=)(/%$)";
let lettersMayus= letters.toUpperCase();


const generatePassword = (hasUpperLetters, hasNumbers, hasSymbols) =>{

    let password = "";
    let passwordExtend = letters;

    let minLength = 8
    let maxLength = 16;

    let randomLength = Math.round(Math.random() * (maxLength - minLength) + minLength);
    console.log(randomLength)


    

    if (hasUpperLetters){

        passwordExtend +=lettersMayus;

    } 
    if (hasNumbers){

        passwordExtend +=numbers;

    }
    if (hasSymbols){

        passwordExtend +=symbols;

    } 
    console.log(passwordExtend)

    for(let i = 0; i < randomLength; i++){
        
        password += passwordExtend.charAt(Math.floor(Math.random()*passwordExtend.length))
    }
    console.log(password)
}

generatePassword(true, true, true);
generatePassword(true, false, true);
generatePassword(false, false, false);
generatePassword(false, false, true);
