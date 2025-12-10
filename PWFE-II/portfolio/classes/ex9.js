
let num = parseInt(prompt('Enter a number:'));

let result = (num % 2 === 0) ? 'even' : 'odd';
alert(`${num} is ${result}`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 9 - Even or Odd Checker</h3>
    <pre><code>
let num = parseInt(prompt('Number:'));

if (num % 2 === 0) {
    console.log(\`\${num} is even\`);
} else {
    console.log(\`\${num} is odd\`);
}
    </code></pre>`;