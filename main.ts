const projects = 5;
const projectTitles = [
  "RU Eating",
  "Frontier",
  "Blackjack",
  "Workouts",
  "Chess"
]
const projectSubtitles = [
  "An unofficial Rutgers University dining hall menu app for iOS written in Swift using SwiftUI, SwiftData and SwiftSoup.",
  "A web-based multiplayer game inspired by the game mechanics of Catan.",
  "Blackjack in JavaScript. Made for AP Computer Science Principles in senior year of high school.",
  "Workout planning app for iOS in Swift using SwiftUI and CoreData.",
  "Console App Chess in C#. Made for fun in junior year of high school."
]
const projectLinks = [
  "https://github.com/alexphanna/ru-eating",
  "https://github.com/alexphanna/frontier",
  "https://github.com/alexphanna/blackjack",
  "https://github.com/alexphanna/workouts",
  "https://github.com/alexphanna/chess"
]

const discs: HTMLElement = document.getElementById("disc-container")!;

for (let i = 0; i < projects; i++) {
  let disc = document.createElement("div");
  disc.className = "disc"; 
  disc.id = i + "";
  if (i != 0) {
    disc.style.marginTop = "-30vh";
  }

  const images = ["cd"];
  disc.style.backgroundImage =
    "url(images/" + images[Math.floor(Math.random() * images.length)] + ".png)";

  disc.addEventListener("mouseenter", function () {
    disc.style.marginLeft = "-10vh";
    disc.classList.add("spin");
    updateProject(i);
  });
  disc.addEventListener("mouseleave", function () {
    disc.style.marginLeft = "-20vh";
    disc.classList.remove("spin");
  });
  disc.addEventListener("mousedown", function () {
    window.location.href = projectLinks[i];
  });

  discs.appendChild(disc);
}

updateProject(0);

function updateProject(i: number) {
  const projectTitle = document.getElementById("project-title")!;
  projectTitle.innerHTML = "<a href=" + projectLinks[i] + ">" + projectTitles[i].toLowerCase() + "</a>";
  const projectSubtitle = document.getElementById("project-subtitle")!;
  projectSubtitle.innerHTML = projectSubtitles[i];
}