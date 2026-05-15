

function consoleLog(functionToUse, a, b) {
    console.log(functionToUse(a, b));
}

const multiply = (a, b) => {
    return a * b;
}

consoleLog(multiply, 5, 5);

let functionCopy = multiply;
let result = multiply(5, 8);

console.log(functionCopy);
console.log(result);
