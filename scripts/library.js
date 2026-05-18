

let target = document.querySelector("#library-form");

console.log(target);
target.addEventListener("submit", async (e) => {
    e.preventDefault();
    let title = document.querySelector("#library-title").value;

    let response = await fetch("http://localhost:5004/title", {
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "date": 14
            }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    let result = await response.text();

    console.log(result);
})