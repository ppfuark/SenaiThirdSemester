
const words = ["AAAAaaaa", "BbbBBBBbBBb", "CCCcccCcCCC"];

const uppercase = words.map(word => word.toUpperCase());

let comparison = "Original → UPPERCASE:\n\n";
words.forEach((word, index) => {
    comparison += `${word}\n→ ${uppercase[index]}\n\n`;
});

alert(comparison);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 6 - Uppercase Converter</h3>
    <pre><code>
const names = ["AAAAaaaa", "BbbBBBBbBBb", "CCCcccCcCCC"];

const uppercaseNames = names.map(name => name.toUpperCase());

console.log("Original:", names);
console.log("Uppercase:", uppercaseNames);


names.forEach(name => {
    console.log(\`\${name} → \${name.toUpperCase()}\`);
});
    </code></pre>`;