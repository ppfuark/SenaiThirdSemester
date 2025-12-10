
let a = parseFloat(prompt('Enter first number:'));
let b = parseFloat(prompt('Enter second number:'));

if (a > b) {
    alert(`${a} > ${b}`);
} else if (a < b) {
    alert(`${a} < ${b}`);
} else {
    alert(`${a} = ${b}`);
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 10 - Number Comparator</h3>
    <pre><code>
let a = parseFloat(prompt('First number:'));
let b = parseFloat(prompt('Second number:'));

if (a > b) {
    console.log(\`\${a} is greater than \${b}\`);
} else if (a < b) {
    console.log(\`\${a} is less than \${b}\`);
} else {
    console.log(\`\${a} equals \${b}\`);
}
    </code></pre>`;