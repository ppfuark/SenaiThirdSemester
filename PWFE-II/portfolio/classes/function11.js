
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const oddNumbers = values.filter(num => num % 2 !== 0);
const evenNumbers = values.filter(num => num % 2 === 0);

let oddCount = oddNumbers.length;
let evenCount = evenNumbers.length;

alert(`Numbers: [${values}]
\nOdd numbers (${oddCount}): [${oddNumbers}]
Even numbers (${evenCount}): [${evenNumbers}]
\nTotal: ${values.length} numbers`);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 11 - Odd Number Counter</h3>
    <pre><code>
const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddCount = numbers.filter(num => num % 2 !== 0).length;

const evenCount = numbers.filter(num => num % 2 === 0).length;

console.log("All numbers:", numbers);
console.log(\`Odd numbers: \${oddCount}\`);  
console.log(\`Even numbers: \${evenCount}\`);

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers); 

const oddCount2 = numbers.reduce((count, num) => 
    num % 2 !== 0 ? count + 1 : count, 0);
    </code></pre>`;