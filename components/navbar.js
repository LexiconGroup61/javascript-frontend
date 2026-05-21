export const getNavbar = (navArray) => {
    let nav = document.createElement("nav");
    let list = document.createElement("ul");
    nav.appendChild(list);
    navArray.forEach(navItem => {
        let listElement = document.createElement("li");
        let link = document.createElement("a");
        link.innerText = navItem.description;
        link.setAttribute("href", navItem.link);
        listElement.appendChild(link);
        list.appendChild(listElement);
    })
    return nav;

}