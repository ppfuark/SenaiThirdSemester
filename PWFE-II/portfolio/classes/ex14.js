
let height = parseFloat(prompt('Enter your height in meters (e.g., 1.75):'));
let weight = parseFloat(prompt('Enter your weight in kg:'));

let bmi = weight / (height * height);

let category;
if (bmi < 18.5) category = 'Underweight';
else if (bmi < 25) category = 'Normal weight';
else if (bmi < 30) category = 'Overweight';
else category = 'Obese';

alert(`BMI: ${bmi.toFixed(1)} (${category})`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 14 - BMI Calculator</h3>
    <pre><code>
let height = parseFloat(prompt('Height (m):'));
let weight = parseFloat(prompt('Weight (kg):'));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log(\`BMI: \${bmi.toFixed(1)} - Underweight\`);
} else if (bmi < 25) {
    console.log(\`BMI: \${bmi.toFixed(1)} - Normal\`);
} else if (bmi < 30) {
    console.log(\`BMI: \${bmi.toFixed(1)} - Overweight\`);
} else {
    console.log(\`BMI: \${bmi.toFixed(1)} - Obese\`);
}
    </code></pre>`;