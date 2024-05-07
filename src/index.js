import loadAboutUs from "./aboutUs.js";
import loadHome from "./home.js";
import "./style.css";

const header = document.createElement("header");
const headerInner = document.createElement("div");
const logo = document.createElement("p");
const headerNav = document.createElement("div");
const headerBtnHome = document.createElement("li");
const btnHome = document.createElement("button");
const headerBtnAbout = document.createElement("li");
const btnAbout = document.createElement("button");
const headerBtnPopular = document.createElement("li");
const btnPopular = document.createElement("button");
const headerBtnRecently = document.createElement("li");
const btnRecently = document.createElement("button");

header.classList.add("header");

logo.textContent = "Shushi";
btnHome.textContent = "Home";
btnAbout.textContent = "About";
btnPopular.textContent = "Popular";
btnRecently.textContent = "Recently";

headerInner.classList.add("headerInner");
headerNav.classList.add("headerInner");
btnAbout.id("aboutUs");

document.body.append(header);
header.appendChild(headerInner);
headerBtnHome.appendChild(btnHome);
headerBtnAbout.appendChild(btnAbout);
headerBtnPopular.appendChild(btnPopular);
headerBtnRecently.appendChild(btnRecently);
headerInner.appendChild(headerNav);
headerNav.appendChild(logo);
headerNav.appendChild(headerBtnHome);
headerNav.appendChild(headerBtnAbout);
headerNav.appendChild(headerBtnPopular);
headerNav.appendChild(headerBtnRecently);

loadHome();
// loadAboutUs();
