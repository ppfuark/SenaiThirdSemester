
const CORRECT_PASSWORD = 'Dormi';


let attempt = prompt('Enter password:');


if (attempt === CORRECT_PASSWORD) {
    alert('✅ Access granted! Welcome!');
} else {
    alert('❌ Access denied. Incorrect password.');
    console.log('Attempted password:', attempt); 
}


document.getElementById("result").innerHTML = `
    <h3>Exercise 11 - Password Validator</h3>
    <pre><code>

const PASSWORD = 'Dormi';


let userInput = prompt('Password:');


if (userInput === PASSWORD) {
    console.log('Access granted!');
} else {
    console.log('Access denied.');
}
    </code></pre>`;