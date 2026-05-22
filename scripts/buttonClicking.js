let buttonTarget = document.querySelector("#button-area");
let toChange = document.querySelector("#date");

buttonTarget.addEventListener("click", (event) => {
    let target = event.target.attributes.id.nodeValue;
    if (target === "buttonA"){
        toChange.innerText = "A Lovely Page"
    }
    if (target === "buttonB"){
        toChange.innerText = "A Ordinary Page"
    }
    if (target === "buttonC"){
        toChange.innerText = "My Page"
    }
    if (target === "button-area"){
        toChange.innerText = "No button clicked"
    }
})

window.addEventListener("load", (e) => {
    let newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newSVG.setAttribute("width", "100");
    newSVG.setAttribute("height", "100");
    let newRectA = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectA.setAttribute("x", "0");
    newRectA.setAttribute("y", "0");
    newRectA.setAttribute("width", "100");
    newRectA.setAttribute("height", "100");
    newRectA.setAttribute("class", "bg-square");
    newSVG.appendChild(newRectA);
    let newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRect.setAttribute("x", "20");
    newRect.setAttribute("y", "20");
    newRect.setAttribute("width", "50");
    newRect.setAttribute("height", "50");
    newRect.setAttribute("class", "square");
    newSVG.appendChild(newRect);
    document.querySelector("#site-container").appendChild(newSVG);

})