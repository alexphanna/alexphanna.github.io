"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const projects_json_1 = __importDefault(require("./projects.json"));
function main() {
    const discs = document.getElementById("disc-container");
    let amount = 5;
    for (let i = 0; i < amount; i++) {
        let disc = document.createElement("div");
        disc.className = "disc";
        disc.style.zIndex = "" + i;
        if (i != 0) {
            disc.style.marginTop = "-30vh";
        }
        const images = ["cd"];
        disc.style.backgroundImage =
            "url(images/" + images[Math.floor(Math.random() * images.length)] + ".png)";
        const angle = Math.random() * 90 - 45;
        disc.style.transform = "Rotate(" + angle + "deg)";
        disc.addEventListener("mouseenter", function () {
            disc.style.marginLeft = "-10vh";
        });
        disc.addEventListener("mouseleave", function () {
            disc.style.marginLeft = "-20vh";
        });
        disc.addEventListener("mouseclick", function () {
            const projectTitle = document.getElementById("project-title");
            projectTitle.innerHTML = projects_json_1.default.projects[1].title;
        });
        discs.appendChild(disc);
    }
}
