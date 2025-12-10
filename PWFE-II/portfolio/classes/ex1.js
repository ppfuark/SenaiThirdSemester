
let num1 = parseFloat(prompt('Enter first number:'));
let num2 = parseFloat(prompt('Enter second number:'));

let results = {
    sum: num1 + num2,
    difference: num1 - num2,
    product: num1 * num2,
    quotient: num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
};

alert(`Results:
Sum: ${results.sum}
Difference: ${results.difference}
Multiplication: ${results.product}
Division: ${results.quotient}`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 1 - Basic Arithmetic Operations</h3>
    <pre><code>
let num1 = parseFloat(prompt('Enter first number:'));
let num2 = parseFloat(prompt('Enter second number:'));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

console.log(\`Sum: \${sum}\`);
console.log(\`Difference: \${difference}\`);
console.log(\`Product: \${product}\`);
console.log(\`Quotient: \${quotient}\`);
    </code></pre>`;