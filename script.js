

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
            }
            else if(computerSelection === "paper"){
                result = "You lose!, Paper beats Rock!"
            }
        }
    else if(playerSelection === "paper"){
            if(computerSelection === "scissor"){
                result = "You lose! Scissor beats paper!"
            }
            else if(computerSelection === "rock"){
                result = "You win!, Paper beats Rock!"
            }
        }
    else if(playerSelection === "scissor"){
            if(computerSelection === "rock"){
                result = "You lose! Rock beats scissor"
            }
            else if(computerSelection === "paper"){
                result = "You win! Paper beats Rock!"
            }
        }
    return result;
    
}


    


const playerSelection = prompt("Rock, Paper, or Scissors? ", "Rock").toLowerCase();
const computerSelection = getComputerChoice();

console.log("You picked " + playerSelection);
console.log("Computer picks " + computerSelection);
console.log(playRound(playerSelection,computerSelection));
