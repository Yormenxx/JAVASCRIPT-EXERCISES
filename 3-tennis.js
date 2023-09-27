
/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */




console.log("JUEGO DE TENNIS")

const gameScore = ["Love", "15", "30", "40","Deuce"]

const tennisResultGame= ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];

let player1  = 0;

let player2  = 0;

function tennisGame(points){

    for(let i = 0; i < points.length; i++){

        if(points[i] === "P1"){

          player1++;

        }else if(points[i] === "P2"){

          player2++;
        }else{
          return console.log("Invalid actions")
        }

      resultScreen(player1, player2)

    }

    
    player1 > player2 ? console.log("Ha ganado el P1") : console.log("Ha ganado el P2");

} 

  

function resultScreen (p1, p2){

    if(gameScore[p1] =="40" && gameScore[p2] == "40"){

        console.log(`${gameScore[4]}`)

    }else if(p1 > 3){

        console.log("Ventaja para el player1")

    }else if(p2 > 3){

        console.log("Ventaja para el player2")

    }else{
        console.log(`${gameScore[p1]} - ${gameScore[p2]}`)
    }

    


}

tennisGame(tennisResultGame);