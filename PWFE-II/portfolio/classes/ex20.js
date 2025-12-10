
let n;
do {
    n = parseInt(prompt("Enter a positive number (max 20):"));
} while (isNaN(n) || n < 0 || n > 20);

let factorial = 1;
let calculation = "";

for (let i = 1; i <= n; i++) {
    factorial *= i;
    calculation += (i === 1) ? i : ` × ${i}`;
}

alert(`${n}! = ${calculation} = ${factorial}`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 20 - Factorial Calculator</h3>
    <pre><code>
let n = parseInt(prompt("Enter a number:"));

// Calculate factorial
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(\`\${n}! = \${factorial}\`);
    </code></pre>`;