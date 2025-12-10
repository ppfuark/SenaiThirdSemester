
const celsiusToFahrenheit = c => (c * 9/5) + 32;
const fahrenheitToCelsius = f => (f - 32) * 5/9;

let celsius = parseFloat(prompt("Enter temperature in Celsius:"));

let fahrenheit = celsiusToFahrenheit(celsius);
alert(`${celsius}°C = ${fahrenheit.toFixed(1)}°F\n\n(Back conversion: ${fahrenheit.toFixed(1)}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(1)}°C)`);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 8 - Temperature Converter</h3>
    <pre><code>
const celsiusToFahrenheit = c => (c * 9/5) + 32;

const fahrenheitToCelsius = f => (f - 32) * 5/9;

console.log(\`0°C = \${celsiusToFahrenheit(0)}°F\`);      
console.log(\`100°C = \${celsiusToFahrenheit(100)}°F\`);  
console.log(\`32°F = \${fahrenheitToCelsius(32)}°C\`);    
console.log(\`212°F = \${fahrenheitToCelsius(212)}°C\`);  

const temperatures = [0, 20, 37, 100];
temperatures.forEach(temp => {
    console.log(\`\${temp}°C = \${celsiusToFahrenheit(temp).toFixed(1)}°F\`);
});
    </code></pre>`;