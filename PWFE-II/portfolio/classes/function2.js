const isEven = num => num % 2 === 0;


let testNumbers = [4, 7, 12, 15, 0];

let results = testNumbers.map(num => `${num} is ${isEven(num) ? 'even' : 'odd'}`);

alert(results.join('\n'));


document.getElementById("result").innerHTML = `
    <h3>Function Exercise 2 - Even/Odd Checker</h3>
    <pre><code>

const isEven = num => num % 2 === 0;


console.log(isEven(4));    
console.log(isEven(7));    
console.log(isEven(0));    
console.log(isEven(-2));   


let number = 10;
if (isEven(number)) {
    console.log(\`\${number} is even\`);
} else {
    console.log(\`\${number} is odd\`);
}
    </code></pre>`;