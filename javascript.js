const choices = ['Rock', 'Paper', 'Scissors'];
let computerSelection = '';
let playerSelection = '';
let scores = {playerScore : 0, computerScore : 0};

function computerPlay() {
    let choice = choices[Math.floor(Math.random()* choices.length)];
    return computerSelection = choice;
}

function playRound(playerSelection, computerSelection) {
    let cS = computerSelection;
    let pS = playerSelection;

    if (cS === pS) {
        content.textContent = (`Computer chose ${cS} as well. It\'s a tie!`);
        score1.textContent = `Your score: ${scores.playerScore}`;
        score2.textContent = `Computer\'s score: ${scores.computerScore}`;
        
    } else if (cS === 'Rock' && pS === 'Paper' || cS === 'Paper' &&
       pS === 'Scissors' || cS === 'Scissors' && pS === 'Rock') {
        content.textContent = (`You win! ${pS} beats ${cS}!`);
        scores.playerScore++;
        score1.textContent = `Your score: ${scores.playerScore}`;
        score2.textContent = `Computer\'s score: ${scores.computerScore}`;
        
    } else if (cS === 'Rock' && pS === 'Scissors' || cS === 'Paper' &&
       pS === 'Rock' || cS === 'Scissors' && pS === 'Paper') {
        content.textContent = (`You lose! ${cS} beats ${pS}!`);
        scores.computerScore++;
        score1.textContent = `Your score: ${scores.playerScore}`;
        score2.textContent = `Computer\'s score: ${scores.computerScore}`;
        
    } else {
        content.textContent = 
          ('Error! Something went wrong.')
    }
}

function endGame(scores) {
    if (scores.playerScore > scores.computerScore) {
        content.textContent = 
          ('END OF GAME: Victory is yours! Click "Reset" to play again.');
    } else { 
        content.textContent = 
          ('END OF GAME: Luh-hoo-zuh-her! Better luck next time. Click "Reset" to play again.');
    } 
}

function clickLoop() {
    if (scores.playerScore + scores.computerScore < 5) {
        const buttons = document.querySelectorAll('.choice');
        const allBtns = document.querySelectorAll('button');
        const reset = document.querySelector('.reset');

        allBtns.forEach((button) => {
            button.addEventListener('click', (event) => {
                if (event.target == reset) {
                    allBtns.forEach((button) => { button.disabled = false;})
                    counter = 0;
                    scores.playerScore = 0;
                    scores.computerScore = 0;
                    playerSelection = '';
                    computerSelection = '';
                    score1.textContent = `Your score: ${scores.playerScore}`;
                    score2.textContent = `Computer\'s score: ${scores.computerScore}`;
                    content.textContent = "Rock, Paper, or Scissors?";
                } else {
                    playerSelection = event.target.textContent;
                    playRound(playerSelection, computerPlay());
                }
                if (scores.playerScore + scores.computerScore == 5) {
                    endGame(scores);
                    score1.textContent = `Your score: ${scores.playerScore}`;
                    score2.textContent = `Computer\'s score: ${scores.computerScore}`;
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                } else if (event.target != reset) {
                    counter++;
                } else {
                    return;
                }
            });
        });
    } else {
        content.textContent = ('Error!');
    }
}
//Reference to "results" div
const results = document.querySelector('#results');
//Creates "content" & "score" divs 
const content = document.createElement('div');
const score1 = document.createElement('div');
const score2 = document.createElement('div');
//Classes added to divs (FOR STYLING)
content.classList.add('content');
score1.classList.add('score1');
score2.classList.add('score2');

results.textContent = clickLoop();
content.textContent = "Rock, Paper, or Scissors? Best out of 5; ties don't count!";
score1.textContent = `Your score: ${scores.playerScore}`;
score2.textContent = `Computer\'s score: ${scores.computerScore}`;

results.appendChild(score1);
results.appendChild(score2);
results.insertBefore(content, score1);