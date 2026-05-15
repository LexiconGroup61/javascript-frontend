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
