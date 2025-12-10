
let age = parseInt(prompt('Enter your age:'));

if (age < 0) {
    alert('Invalid age!');
} else if (age < 13) {
    alert('You are a child.');
} else if (age < 18) {
    alert('You are a teenager.');
} else if (age < 65) {
    alert('You are an adult.');
} else {
    alert('You are a senior.');
}

document.getElementById("result").innerHTML = `
    <h3>Exercise 8 - Age Category Checker</h3>
    <pre><code>
let age = parseInt(prompt('Your age:'));

if (age < 0) {
    console.log('Invalid age');
} else if (age < 13) {
    console.log('Child');
} else if (age < 18) {
    console.log('Teenager');
} else if (age < 65) {
    console.log('Adult');
} else {
    console.log('Senior');
}
    </code></pre>`;