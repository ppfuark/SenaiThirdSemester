
let height = parseFloat(prompt('Enter height:'));
let width = parseFloat(prompt('Enter width:'));

let area = height * width;

if (height > 0 && width > 0) {
    alert(`Area: ${area} square units`);
} else {
    alert('Please enter positive dimensions!');
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 7 - Area Calculator</h3>
    <pre><code>
let height = parseFloat(prompt('Height:'));
let width = parseFloat(prompt('Width:'));

if (height > 0 && width > 0) {
    let area = height * width;
    console.log(\`Area: \${area} square units\`);
} else {
    console.log('Invalid dimensions');
}
    </code></pre>`;