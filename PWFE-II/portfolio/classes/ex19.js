
let userChoice = prompt("Choose: pedra, papel, or tesoura").toLowerCase();

const validChoices = ["pedra", "papel", "tesoura"];
if (!validChoices.includes(userChoice)) {
    alert("Invalid choice! Please reload and choose pedra, papel, or tesoura.");
} else {

    const computerChoice = validChoices[Math.floor(Math.random() * 3)];
    

    let result;
    if (userChoice === computerChoice) {
        result = "🤝 It's a tie!";
    } else if (
        (userChoice === "pedra" && computerChoice === "tesoura") ||
        (userChoice === "papel" && computerChoice === "pedra") ||
        (userChoice === "tesoura" && computerChoice === "papel")
    ) {
        result = "🎉 You win!";
    } else {
        result = "💻 Computer wins!";
    }
    

    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n\n${result}`);
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 19 - Rock, Paper, Scissors</h3>
    <pre><code>
const choices = ["pedra", "papel", "tesoura"];
let userChoice = prompt("Your choice:").toLowerCase();

if (choices.includes(userChoice)) {

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    

    if (userChoice === computerChoice) {
        console.log("Tie!");
    } else if (
        (userChoice === "pedra" && computerChoice === "tesoura") ||
        (userChoice === "papel" && computerChoice === "pedra") ||
        (userChoice === "tesoura" && computerChoice === "papel")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
} else {
    console.log("Invalid choice!");
}
    </code></pre>`;