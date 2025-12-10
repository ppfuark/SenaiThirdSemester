
const numbers = [2, 4, 6, 8, 10, 12];

const multiplied = numbers.map((num, index) => num * index);

let calculation = "Number × Index = Result:\n\n";
numbers.forEach((num, index) => {
    calculation += `${num} × ${index} = ${multiplied[index]}\n`;
});

alert(calculation);

document.getElementById("result").innerHTML = `
    <h3>Function Exercise 10 - Multiply by Index</h3>
    <pre><code>
const numbers = [2, 4, 6, 8];

const result = numbers.map((num, index) => num * index);

console.log("Numbers:", numbers);
console.log("Result:", result); 

let multiplied = [];
for (let i = 0; i < numbers.length; i++) {
    multiplied.push(numbers[i] * i);
}
    </code></pre>`;