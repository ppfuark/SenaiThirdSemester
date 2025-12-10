
let year = parseInt(prompt('Enter a year:'));

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

alert(`${year} is ${isLeapYear ? '' : 'NOT '}a leap year`);

document.getElementById("result").innerHTML = `
    <h3>Exercise 15 - Leap Year Checker</h3>
    <pre><code>
let year = parseInt(prompt('Year:'));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(\`\${year} is a leap year\`);
} else {
    console.log(\`\${year} is not a leap year\`);
}
    </code></pre>`;