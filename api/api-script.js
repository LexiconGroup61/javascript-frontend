const apiGetCall = async (url) => {
    try {
        var response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
    const result = await response.json();
    return result;
}

const apiPostCall = async () => {
    const response = await fetch("http://localhost:8080", {
        method: "POST",
        body: JSON.stringify({
            "password": "123456",
        })
    })
}

apiGetCall("http://localhost:8080");