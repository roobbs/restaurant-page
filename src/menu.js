function createMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menuContainer");

    const menu1 = document.createElement("div");
    menu1.classList.add("menu1");
    menu.appendChild(menu1);


    return menu;
}



export default function loadMenu () {
    const main = document.querySelector(".main");
    main.innerHTML="";
    main.appendChild(createMenu());
}