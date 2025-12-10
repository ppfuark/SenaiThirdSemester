
let userNumber;
do {
    userNumber = parseInt(prompt("Guess a number between 1-100:"));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);

let found = false;

for (let attempt = 1; attempt <= 3; attempt++) {
    let computerGuess = Math.floor(Math.random() * 100) + 1;
    
    if (computerGuess === userNumber) {
        alert(`🎯 Attempt ${attempt}: Computer guessed ${computerGuess} - CORRECT!`);
        found = true;
        break;
    } else {
        alert(`❌ Attempt ${attempt}: Computer guessed ${computerGuess} - Wrong`);
    }
}

if (!found) {
    alert(`💀 Game over! Computer couldn't guess ${userNumber} in 3 attempts.`);
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 17 - Guessing Game</h3>
    <pre><code>
let userNumber = parseInt(prompt("Number between 1-100:"));
let attempts = 3;
let guessed = false;

for (let i = 1; i <= attempts; i++) {
    let guess = Math.floor(Math.random() * 100) + 1;
    
    if (guess === userNumber) {
        console.log(\`Attempt \${i}: \${guess} - Correct!\`);
        guessed = true;
        break;
    } else {
        console.log(\`Attempt \${i}: \${guess} - Wrong\`);
    }
}

if (!guessed) {
    console.log('Computer failed to guess the number');
}
    </code></pre>`;