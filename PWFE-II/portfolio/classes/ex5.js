
let num = parseFloat(prompt('Enter number to check:'));
let divisor = parseFloat(prompt('Enter divisor:'));

if (divisor === 0) {
    alert('Cannot check multiples of zero!');
} else if (num % divisor === 0) {
    alert(`${num} is a multiple of ${divisor}`);
} else {
    alert(`${num} is NOT a multiple of ${divisor}`);
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 5 - Multiple Checker</h3>
    <pre><code>
let num = parseFloat(prompt('Number to check:'));
let divisor = parseFloat(prompt('Divisor:'));

if (divisor === 0) {
    console.log('Cannot divide by zero');
} else if (num % divisor === 0) {
    console.log(\`\${num} is a multiple of \${divisor}\`);
} else {
    console.log(\`\${num} is not a multiple of \${divisor}\`);
}
    </code></pre>`;