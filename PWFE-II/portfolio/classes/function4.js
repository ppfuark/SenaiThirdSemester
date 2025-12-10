
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

alert(`Original: [${numbers}]
Doubled: [${doubled}]`);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 4 - Double Numbers</h3>
    <pre><code>
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);

const doubled2 = numbers.map(function(num) {
    return num * 2;
});

    </code></pre>`;