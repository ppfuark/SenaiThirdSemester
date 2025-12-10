
let number;
do {
    number = parseInt(prompt("Enter a number (1-10):"));
} while (isNaN(number) || number < 1 || number > 10);

let table = `Multiplication Table for ${number}:\n\n`;
for (let i = 1; i <= 10; i++) {
    let result = number * i;
    table += `${number} × ${i} = ${result}\n`;
}

alert(table);

document.getElementById("result").innerHTML = `
    <h3>Exercise 18 - Multiplication Table</h3>
    <pre><code>
let number = parseInt(prompt("Enter number (1-10):"));

console.log(\`Multiplication table for \${number}:\`);
for (let i = 1; i <= 10; i++) {
    console.log(\`\${number} × \${i} = \${number * i}\`);
}
    </code></pre>`;