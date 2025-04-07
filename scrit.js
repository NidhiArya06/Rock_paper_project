let userScore = 0;
let compScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === compChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        result = `You win! 🎉 ${userChoice} beats ${compChoice}`;
        userScore++;
    } else {
        result = `You lose 😢 ${compChoice} beats ${userChoice}`;
        compScore++;
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('computer-choice').innerText = `Computer chose: ${compChoice}`;
    document.getElementById('score').innerText = `You: ${userScore} | Computer: ${compScore}`;

}
