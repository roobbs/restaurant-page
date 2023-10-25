function createHome () {
    const home = document.createElement("div");
    home.classList.add("homeContainer");

    const part1 = document.createElement("div");
    part1.classList.add("home1");
    home.appendChild(part1);
    
    const part2 = document.createElement("div");
    part2.classList.add("home2");
    home.appendChild(part2);

    const title = document.createElement("div");
    title.classList.add("homeTitle");
    title.textContent = "Discover your taste";
    part2.appendChild(title);
    const bigTitle = document.createElement("div");
    bigTitle.classList.add("homeBigTitle");
    bigTitle.textContent = "Eat Healthy, Delicious, and Authentic Food";
    part2.appendChild(bigTitle);
    const discoverMenu = document.createElement("button");
    discoverMenu.classList.add("discoverMenu");
    discoverMenu.textContent = "Discover Menu >>>";
    part2.appendChild(discoverMenu);

    return home;
}

export default function loadHome () {
    const main = document.querySelector(".main");
    main.innerHTML="";
    main.appendChild(createHome());
}