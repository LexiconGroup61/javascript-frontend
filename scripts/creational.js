
const createTextHelper = (type, text) => {
    let newElement = document.createElement(type);
    let newNode = document.createTextNode(text);
    newElement.append(newNode);
    return newElement;
}

let newElement1 = createTextHelper("h2", "Second level, again");
let newElement2 = createTextHelper("p", "Last text");

let spanElement = document.createElement("span");
spanElement.append("Text before");
newElement1.prepend(spanElement);
spanElement.setAttribute("class", "italics")

let targetElement = document.querySelector("div");

targetElement.append(newElement1);
targetElement.append(newElement2);



const eventFunctionA = (event) => {
    console.log("h2")
    console.log(event);
    newElement1.setAttribute("class", "regular");
}

const eventFunctionB = (event) => {
    console.log("div")
    console.log(event);
}

const eventFunctionC = (event) => {
    console.log("body")
    console.log(event);
}





newElement1.addEventListener("click", eventFunctionA);
targetElement.addEventListener("click", eventFunctionB);
document.body.addEventListener("click", eventFunctionC);
