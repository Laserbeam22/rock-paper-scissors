const choices = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay();
let counter = 0;
let scores = {playerScore : 0, computerScore : 0};

function computerPlay() {
    let choice = choices[Math.floor(Math.random()* choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let cS = computerSelection;
    let pS = playerSelection;

    if (cS === pS) {
        content.textContent = ('It\'s a tie!');
        scores.playerScore++;
        scores.computerScore++;
        score.textContent = (`Your score: ${scores.playerScore},
          Computer\'s score: ${scores.computerScore}`);
    } else if (cS === 'Rock' && pS === 'Paper' || cS === 'Paper' &&
       pS === 'Scissors' || cS === 'Scissors' && pS === 'Rock') {
        content.textContent = (`You win! ${pS} beats ${cS}!`);
        scores.playerScore++;
        score.textContent = (`Your score: ${scores.playerScore},
          Computer\'s score: ${scores.computerScore}`);
    } else if (cS === 'Rock' && pS === 'Scissors' || cS === 'Paper' &&
       pS === 'Rock' || cS === 'Scissors' && pS === 'Paper') {
        content.textContent = (`You lose! ${cS} beats ${pS}!`);
        scores.computerScore++;
        score.textContent = (`Your score: ${scores.playerScore},
          Computer\'s score: ${scores.computerScore}`);
    } else {
        content.textContent = 
          ('Error! Something went wrong.')
    }
}

function endGame(scores) {
    if (scores.playerScore > scores.computerScore) {
        content.textContent = 
          ('END OF GAME: Victory is yours! Refresh browser to play again.');
    } else if (scores.playerScore < scores.computerScore) {
        content.textContent = 
          ('END OF GAME: Luh-hoo-zuh-her! Better luck next time. Refresh browser to play again.');
    } else {
        content.textContent = 
          ('END OF GAME: A complete tie. How unsatisfying. Refresh browser to play again.');
    }
}

function clickLoop() {
    if (counter < 5) {
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                playerSelection = event.target.textContent;
                playRound(playerSelection, computerPlay());
                if (counter == 4) {
                    endGame(scores);
                    score.textContent = (`Your score: ${scores.playerScore},
                      Computer\'s score: ${scores.computerScore}`);
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                } else {
                    counter++;
                }
            });
        });
    } else {
        content.textContent = ('Error!');
    }
}

const results = document.querySelector('#results');
const content = document.createElement('div');
const score = document.createElement('div');

content.classList.add('content');
score.classList.add('score');

results.textContent = clickLoop();
content.textContent = "Rock, Paper, or Scissors??";
score.textContent = `Your score: ${scores.playerScore},
  Computer\'s score: ${scores.computerScore}`;

results.appendChild(score);
results.insertBefore(content, score);
