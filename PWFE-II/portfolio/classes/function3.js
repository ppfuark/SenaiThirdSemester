
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';


let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));


let results = {
    sum: add(a, b),
    difference: subtract(a, b),
    product: multiply(a, b),
    quotient: divide(a, b)
};


alert(`Results:
${a} + ${b} = ${results.sum}
${a} - ${b} = ${results.difference}
${a} × ${b} = ${results.product}
${a} ÷ ${b} = ${results.quotient}`);


document.getElementById("result").innerHTML = `
    <h3>Function Exercise 3 - Arithmetic Operations</h3>
    <pre><code>

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error: Division by zero';


let x = 10, y = 5;

console.log(\`\${x} + \${y} = \${add(x, y)}\`);      
console.log(\`\${x} - \${y} = \${subtract(x, y)}\`);  
console.log(\`\${x} × \${y} = \${multiply(x, y)}\`);  
console.log(\`\${x} ÷ \${y} = \${divide(x, y)}\`);    
    </code></pre>`;