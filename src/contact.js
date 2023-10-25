function createContact () {
    const contact = document.createElement("div");
    contact.classList.add("homeContainer");

    const part1 = document.createElement("div");
    part1.classList.add("contact1");
    contact.appendChild(part1);
    
    const part2 = document.createElement("div");
    part2.classList.add("contact2");
    contact.appendChild(part2);

    const title = document.createElement("div");
    title.classList.add("contactTitle");
    title.textContent = "CONTACT US";
    part2.appendChild(title);

    const info = document.createElement("div");
    info.classList.add("contactInfo");
    part2.appendChild(info);

    const tel = document.createElement("div");
    tel.classList.add("tel");
    tel.textContent="☎ +234 8130884044";
    info.appendChild(tel);
    const mail = document.createElement("div");
    mail.classList.add("mail");
    mail.textContent="📩 rest@gmail.com";
    info.appendChild(mail);
    const ubi = document.createElement("div");
    ubi.classList.add("ubi");
    ubi.textContent="📍 Hollywood Boulevard 42, Los Angeles, USA";
    info.appendChild(ubi);
    const hour = document.createElement("div");
    hour.classList.add("hour");
    info.appendChild(hour);
        const hourDay = document.createElement("div");
        hourDay.textContent=" Wednesday - Sunday";
        hour.appendChild(hourDay);
        const hourTime = document.createElement("div");
        hourTime.textContent= "🕒 8:00AM - 10:30PM";
        hour.appendChild(hourTime);

    return contact;
}



export default function loadContact () {
    const main = document.querySelector(".main");
    main.innerHTML="";
    main.appendChild(createContact());
}