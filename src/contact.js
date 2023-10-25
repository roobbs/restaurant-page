function createContact () {
    const contact = document.createElement("div");
    contact.classList.add("menuContainer");

    return contact;
}



export default function loadContact () {
    const main = document.querySelector(".main");
    main.innerHTML="";
    main.appendChild(createContact());
}