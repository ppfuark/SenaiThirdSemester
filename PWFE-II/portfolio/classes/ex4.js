
let num1 = parseFloat(prompt('Enter first number:'));
let num2 = parseFloat(prompt('Enter second number:'));

let difference = Math.abs(num1 - num2);

alert(`Difference: ${difference}`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 4 - Difference Calculator</h3>
    <pre><code>
let num1 = parseFloat(prompt('First number:'));
let num2 = parseFloat(prompt('Second number:'));

let difference = Math.abs(num1 - num2);

console.log(\`Difference: \${difference}\`);
    </code></pre>`;