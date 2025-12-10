
let celsius = parseFloat(prompt('Enter temperature in Celsius:'));

let fahrenheit = (celsius * 9/5) + 32;

alert(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 6 - Temperature Converter</h3>
    <pre><code>
let celsius = parseFloat(prompt('Celsius:'));

let fahrenheit = (celsius * 9/5) + 32;

console.log(\`\${celsius}°C = \${fahrenheit.toFixed(1)}°F\`);
    </code></pre>`;