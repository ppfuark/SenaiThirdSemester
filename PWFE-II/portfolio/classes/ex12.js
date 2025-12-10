
let temp = parseFloat(prompt('Enter temperature in Celsius:'));

if (temp < 10) {
    alert('Freezing cold!');
} else if (temp < 18) {
    alert('Chilly');
} else if (temp <= 25) {
    alert('Pleasant temperature');
} else if (temp <= 35) {
    alert('Hot');
} else {
    alert('Extremely hot!');
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 12 - Temperature Categorizer</h3>
    <pre><code>
let temp = parseFloat(prompt('Temperature in °C:'));

if (temp < 10) {
    console.log('Freezing cold');
} else if (temp < 18) {
    console.log('Chilly');
} else if (temp <= 25) {
    console.log('Pleasant');
} else if (temp <= 35) {
    console.log('Hot');
} else {
    console.log('Extremely hot');
}
    </code></pre>`;