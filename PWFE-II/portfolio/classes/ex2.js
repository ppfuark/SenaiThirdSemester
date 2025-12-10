
let grades = [
    parseFloat(prompt('Enter first test grade:')),
    parseFloat(prompt('Enter second test grade:')),
    parseFloat(prompt('Enter third test grade:'))
];

let average = (grades[0] + grades[1] + grades[2]) / 3;

alert(`Average grade: ${average.toFixed(2)}`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 2 - Average Grade Calculator</h3>
    <pre><code>
let grade1 = parseFloat(prompt('Grade 1:'));
let grade2 = parseFloat(prompt('Grade 2:'));
let grade3 = parseFloat(prompt('Grade 3:'));

let average = (grade1 + grade2 + grade3) / 3;

console.log(\`Average: \${average.toFixed(2)}\`);
    </code></pre>`;