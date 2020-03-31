let playerPoints = 0
let computerPoints = 0

function game(){

    //PLAYERS CHOICE

    let play = prompt("Choice: ").toUpperCase()
    

    while((play !== "ROCK") && (play !== "PAPER") && (play !== "SCISSORS")){

        play = prompt("Choice: ").toUpperCase()
    }


    alert("You chose: " + play)

    //COMPUTERS CHOICE

    let a = Math.floor(Math.random() * 3) + 1

    if(a == 1){
        a = "ROCK"
    }

    else if(a == 2){
        a = "PAPER"
    }

    else if(a == 3){
        a = "SCISSORS"
    }

    alert("Computer chose: "  + a)

    //LOGIC

    if((a == "ROCK" && play == "ROCK") || (a == "PAPER" && play == "PAPER") || (a == "SCISSORS" && play == "SCISSORS")){
        alert("Its a tie")
    }
    else if((a == "ROCK" && play == "SCISSORS") || (a == "PAPER" && play == "ROCK") || (a == "SCISSORS" && play == "PAPER")){
        alert("Computer wins")
        computerPoints = computerPoints + 1
    }
    else if((a == "ROCK" && play == "PAPER") || (a == "PAPER" && play == "SCISSORS") || (a == "SCISSORS" && play == "ROCK")){
        alert("You win")
        playerPoints = playerPoints + 1
}

alert("You: " + playerPoints + "\nComputer: " + computerPoints)

}


(function repeat(number) {
    game(number);
    if (number > 1) repeat(number - 1);
})(5);

//WINNER DECLARATION

if(computerPoints > playerPoints){

    alert("Computer is the winner!")
}

    else if(computerPoints < playerPoints){
        alert("You are the winner!")
    }

    else{
        alert("Its a tie!")
    }
    