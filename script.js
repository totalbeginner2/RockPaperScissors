var userScore = 0;
var computerScore = 0;
let computerSelection;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let choices = ["rock","paper","scissor"];

    return choices[num];
}

//selects area of 'results' using DOM then creates a <p> which displays the result of round in the <p>. 
const result = document.querySelector('.result');
let resultDisplay = document.createElement('p');
resultDisplay.classList.add('resultDisplay')

//button selectors 
const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector('.Paper');
const btnScissor = document.querySelector('.Scissors');

//Computer Choice 
const computerChoiceTable = document.querySelector('.computerChoice');
let  computerChoice = document.createElement('p');
const computerChoiceContainer = document.querySelector('.choiceContainer');


//score counters
const userScoreTable = document.querySelector('.userScoreCounter');
let userScoreCount = document.createElement('a');
const computerScoreCounter = document.querySelector('.computerScoreCounter')
let computerScoreCount = document.createElement('a');

//button events 
btnRock.addEventListener("click",()=> {
    resultDisplay.textContent = playRound('rock',getComputerChoice());
    result.appendChild(resultDisplay);
    
});

btnPaper.addEventListener("click",()=> {
    resultDisplay.textContent = playRound('paper',getComputerChoice());
    result.appendChild(resultDisplay);

});

btnScissor.addEventListener("click",()=> {
    resultDisplay.textContent = playRound('scissor',getComputerChoice());
    result.appendChild(resultDisplay);
 
});



function playRound(playerSelection, computerSelection){
    let result;
    let computerElement = document.createElement('img');
    computerElement.src = `${computerSelection}.png`
    computerChoiceContainer.removeChild(computerChoiceContainer.firstChild);
    computerChoiceContainer.appendChild(computerElement);
    computerChoice.textContent = computerSelection; 
    computerChoiceTable.appendChild(computerChoice); 
    
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

    //score table
    userScoreTable.removeChild(userScoreTable.firstChild);
    userScoreCount.textContent = userScore;
    userScoreTable.appendChild(userScoreCount);
    computerScoreCounter.removeChild(computerScoreCounter.firstChild);
    computerScoreCount.textContent = computerScore;
    computerScoreCounter.append(computerScoreCount);

    if(userScore == 5 || computerScore == 5){
        document.querySelectorAll('.btn').forEach((button)=>button.disabled=true);
        if(userScore > computerScore){
        return 'Game over, You win!';
        }
        else if(computerScore > userScore) {
        return 'Game over, Computer wins!';
        }
    };

    return result;
    
}






/*function game(playRound){
    for(let x=0; x<5; x++){
        playerSelection = prompt("Rock, Paper, or Scissors? ", "Rock").toLowerCase();
        computerSelection = getComputerChoice();
        console.log("You picked " + playerSelection);
        console.log("Computer picks " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

    console.log("User score: "+ userScore +" Computer score: "+ computerScore);

}
*/


//game(playRound);

