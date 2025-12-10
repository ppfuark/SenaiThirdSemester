
const sum = (a, b) => a + b;


let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

let result = sum(num1, num2);
alert(`${num1} + ${num2} = ${result}`);


document.getElementById("result").innerHTML = `
    <h3>Function Exercise 1 - Sum Function</h3>
    <pre><code>

const sum = (a, b) => a + b;


let result = sum(5, 3);
console.log(\`5 + 3 = \${result}\`);


console.log(sum(10, 20)); 
    </code></pre>`;