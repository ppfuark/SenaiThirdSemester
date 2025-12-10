
let grade1 = parseFloat(prompt('Enter first grade (0-10):'));
let grade2 = parseFloat(prompt('Enter second grade (0-10):'));

let average = (grade1 + grade2) / 2;

if (average > 7 && (grade1 % 2 === 0 || grade2 % 2 === 0)) {
    alert(`✅ Average: ${average.toFixed(1)} - Above average with at least one even grade`);
} else if (average > 7) {
    alert(`✅ Average: ${average.toFixed(1)} - Above average (no even grades)`);
} else {
    alert(`❌ Average: ${average.toFixed(1)} - Below average`);
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 13 - Grade Analyzer</h3>
    <pre><code>
let grade1 = parseFloat(prompt('Grade 1:'));
let grade2 = parseFloat(prompt('Grade 2:'));

let average = (grade1 + grade2) / 2;

if (average > 7 && (grade1 % 2 === 0 || grade2 % 2 === 0)) {
    console.log('Above average with even grade');
} else if (average > 7) {
    console.log('Above average');
} else {
    console.log('Below average');
}
    </code></pre>`;