let userScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let result;

    if(num === 0){
        result = "rock";
    }
    else if(num === 1){
        result = "paper";
    }

    else if(num === 2){
        result = "scissor";
    }

    return result;
}


function playRound(playerSelection, computerSelection){
    let result;
    if(playerSelection === computerSelection){
        result = "Draw";
    }
    else if(playerSelection === "rock"){
            if(computerSelection === "scissor"){
                result = "You win! Rock beats Scissor!"
                userScore+=1;
            }
            else if(computerSelection === "paper"){
                result = "You lose!, Paper beats Rock!"
                computerScore+=1;
            }
        }
    else if(playerSelection === "paper"){
            if(computerSelection === "scissor"){
                result = "You lose! Scissor beats paper!"
                computerScore+=1;
            }
            else if(computerSelection === "rock"){
                result = "You win!, Paper beats Rock!"
                userScore+=1;
            }
        }
    else if(playerSelection === "scissor"){
            if(computerSelection === "rock"){
                result = "You lose! Rock beats scissor"
                computerScore+=1;
            }
            else if(computerSelection === "paper"){
                result = "You win! Scissor beats rocks!"
                userScore += 1;
            }
        }
    return result;
    
}

function game(playRound){
    for(let x=0; x<5; x++){
        playerSelection = prompt("Rock, Paper, or Scissors? ", "Rock").toLowerCase();
        computerSelection = getComputerChoice();
        console.log("You picked " + playerSelection);
        console.log("Computer picks " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

    console.log("User score: "+ userScore +" Computer score: "+ computerScore);

}


game(playRound);

