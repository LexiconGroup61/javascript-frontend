import {getNavbar} from "../components/navbar.js";
import * as Button from "../components/button.js";
import * as BetterButton from "../components/betterButton.js";

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

export const cancelProcess = () => {
    console.log("The process was canceled");
}

let anotherButtonA = BetterButton.getBetterButton("warning", "Cancel", cancelProcess);
let newButtonA = BetterButton.getButton("warning", "Cancel", cancelProcess);


let anotherButton = Button.getButton("warning", "Cancel", cancelProcess);
let newButton = Button.getBetterButton("warning", "Cancel", cancelProcess);

let data1 = [
    {
        description: "Components",
        link: "http://localhost:63342/Library-frontend/catalog/components.html",

    },
    {
        link: "http://localhost:63342/Library-frontend/catalog/newitem.html",
        description: "News"
    }
]

let navbar = getNavbar(data1);
document.querySelector("#site-menu").appendChild(navbar);

let data2 = [
    ["http://localhost:63342/Library-frontend/catalog/components.html","Components"],
]



document.querySelector("#insert-component").appendChild(newButton);

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

const someFunction = () => {
    let target = document.querySelector("div");
    let storedTarget = localStorage.getItem("divs");
    let newElement = document.createElement("h3");
    newElement.innerText = storedTarget;
    target.appendChild(newElement);
}

const addFunction = () => {
    localStorage.setItem("divs", "Text to add");
}



const userPreferences = {
    theme: 'dark',
    fontSize: '16px',
    language: 'en'
};
// Storing the object in local storage
localStorage.setItem('preferences', JSON.stringify(userPreferences));
// Retrieving the object from local storage
const savedPreferences = JSON.parse(localStorage.getItem('preferences'));
console.log(savedPreferences);  // Output: { theme: "dark", fontSize: "16px", language: "en" }


addFunction();
someFunction();



newElement1.addEventListener("click", eventFunctionA);
targetElement.addEventListener("click", eventFunctionB);
document.body.addEventListener("click", eventFunctionC);


const Archive = () => {
    localStorage.setItem("namedStoreItem", JSON.stringify({
        name: "Harold"}
    ));
    let storeItem = localStorage.getItem("namedStoreItem");
    if(storeItem){
        let restoredValue = JSON.parse(storeItem);
    }
    localStorage.removeItem("namedStoreItem");

    sessionStorage.setItem("name", "Value");
}