const choices = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay(); 
const playerSelection = choices.find(element => {
    return element.toLowerCase() === choice.toLowerCase();
});
let scores = {playerScore : 0, computerScore : 0};

function computerPlay() {
    let choice = choices[Math.floor(Math.random()* choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let cS = computerSelection;
    let pS = playerSelection;

    if (cS === pS) {
        alert('It\'s a tie!');
        scores.playerScore++;
        scores.computerScore++;
    } else if (cS === 'Rock' && pS === 'Paper' || cS === 'Paper' && pS === 'Scissors' || cS === 'Scissors' && pS === 'Rock') {
        alert(`You win! ${pS} beats ${cS}!`);
        scores.playerScore++;
    } else if (cS === 'Rock' && pS === 'Scissors' || cS === 'Paper' && pS === 'Rock' || cS === 'Scissors' && pS === 'Paper') {
        alert(`You lose! ${cS} beats ${pS}!`);
        scores.computerScore++;
    } else {
        alert('Error. Please choose from one of the following options: "Rock", "Paper", or "Scissors"')
    }
}