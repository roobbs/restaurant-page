function createMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menuContainer");

    return menu;
}



export default function loadMenu () {
    const main = document.querySelector(".main");
    main.innerHTML="";
    main.appendChild(createMenu());
}