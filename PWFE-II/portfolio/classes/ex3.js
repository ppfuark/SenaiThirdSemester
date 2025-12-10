
let height = parseFloat(prompt('Wall height (meters):'));
let width = parseFloat(prompt('Wall width (meters):'));


let area = height * width;
let paintNeeded = area / 2; 


alert(`For ${area.toFixed(2)}m² wall area:
You need ${paintNeeded.toFixed(2)} liters of paint.`);


document.getElementById("result").innerHTML = `
    <h3>Exercise 3 - Paint Calculator</h3>
    <pre><code>

let height = parseFloat(prompt('Wall height:'));
let width = parseFloat(prompt('Wall width:'));


let area = height * width;
let paintNeeded = area / 2; 


console.log(\`Wall area: \${area.toFixed(2)}m²\`);
console.log(\`Paint needed: \${paintNeeded.toFixed(2)} liters\`);
    </code></pre>`;