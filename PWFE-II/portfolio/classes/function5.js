
const values = [5, 12, 8, 20, 3, 15, 7, 18];


const greaterThan10 = values.filter(num => num > 10);


alert(`Original: [${values}]
Numbers > 10: [${greaterThan10}]
Count: ${greaterThan10.length} numbers`);


document.getElementById("result").innerHTML = `
    <h3>Function Exercise 5 - Filter Values > 10</h3>
    <pre><code>

const values = [5, 12, 8, 20, 3, 15];


const greaterThan10 = values.filter(num => num > 10);

console.log("All values:", values);
console.log("Values > 10:", greaterThan10);  


const filtered = values.filter(function(num) {
    return num > 10;
});


const evenNumbers = values.filter(num => num % 2 === 0);
    </code></pre>`;