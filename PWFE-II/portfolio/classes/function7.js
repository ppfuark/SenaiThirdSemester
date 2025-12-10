
const square = num => num * num;

let numbers = [5, 10, 3, 7];
let results = numbers.map(n => `${n}² = ${square(n)}`);

alert("Square Calculations:\n\n" + results.join('\n'));

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 7 - Square Calculator</h3>
    <pre><code>
const square = num => num * num;

console.log(square(5));  
console.log(square(10)); 
console.log(square(0));  
console.log(square(-3)); 

const numbers = [1, 2, 3, 4];
const squares = numbers.map(square);
console.log(squares); 

const square2 = num => Math.pow(num, 2);
    </code></pre>`;