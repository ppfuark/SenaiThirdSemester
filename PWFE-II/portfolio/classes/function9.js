
const rectangleArea = (width, height) => width * height;

let width = parseFloat(prompt("Enter rectangle width:"));
let height = parseFloat(prompt("Enter rectangle height:"));

let area = rectangleArea(width, height);
alert(`Rectangle dimensions: ${width} × ${height}\nArea = ${area} square units`);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 9 - Rectangle Area Calculator</h3>
    <pre><code>
const rectangleArea = (width, height) => width * height;

console.log(rectangleArea(10, 5));  
console.log(rectangleArea(3, 7));   
console.log(rectangleArea(0, 5));   

let roomWidth = 4.5;
let roomLength = 6.2;
let roomArea = rectangleArea(roomWidth, roomLength);
console.log(\`Room area: \${roomArea.toFixed(2)} m²\`);

const area = (w, h) => w * h;
    </code></pre>`;