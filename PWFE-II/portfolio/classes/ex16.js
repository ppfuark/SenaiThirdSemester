
let amount = parseFloat(prompt('Enter amount to convert:'));
let exchangeRate = parseFloat(prompt('Enter exchange rate (1 foreign = ? local):'));

let converted = amount * exchangeRate;

alert(`${amount} × ${exchangeRate} = ${converted.toFixed(2)} local currency`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 16 - Currency Converter</h3>
    <pre><code>
let amount = parseFloat(prompt('Amount to convert:'));
let rate = parseFloat(prompt('Exchange rate (1 foreign = ? local):'));

let result = amount * rate;

console.log(\`\${amount} × \${rate} = \${result.toFixed(2)}\`);
    </code></pre>`;