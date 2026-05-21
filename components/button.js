import * as BetterButton from "./betterButton.js"

export const getButton = (type, text, action) => {
    let button = document.createElement("button");
    button.innerText = text;
    button.setAttribute("class", "btn");
    if(type === "warning") button.setAttribute("class", "btn-warning");
    else if(type === "info") button.setAttribute("class", "btn-info");
    button.addEventListener("click", action)
    return button;
}

export const getBetterButton = (type, text, action) => {
    let button = document.createElement("button");
    button.innerText = text;
    button.setAttribute("class", "btn");
    if(type === "warning") button.setAttribute("class", "btn-warning");
    else if(type === "info") button.setAttribute("class", "btn-info");
    button.addEventListener("click", action)
    return button;
}