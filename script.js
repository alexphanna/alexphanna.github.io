"use strict";
const discs = document.getElementById("disc-container");
let amount = 5;
for (let i = 0; i < amount; i++) {
    let disc = document.createElement("div");
    disc.className = "disc";
    disc.style.zIndex = "" + i;
    disc.style.marginTop = i * 10 + "vh";
    const images = ["cd"];
    disc.style.backgroundImage = "url(images/" + images[Math.floor(Math.random() * images.length)] + ".png)";
    const angle = Math.random() * 90 - 45;
    disc.style.transform = "Rotate(" + angle + "deg)";
    disc.addEventListener("mouseenter", function () {
        disc.style.marginLeft = "-10vw";
    });
    disc.addEventListener("mouseleave", function () {
        disc.style.marginLeft = "-20vw";
    });
    discs.appendChild(disc);
}
