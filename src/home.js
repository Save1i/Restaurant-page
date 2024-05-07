export default loadHome;
import "./style.css";

function createHome() {
  const home = document.createElement("div");
  const homePage = document.createElement("div");
  const home_page__text = document.createElement("div");
  const home_img = document.createElement("img");

  home.classList.add("home");
  homePage.classList.add("home_page");
  home_page__text.classList.add("home_page__text");
  home_img.classList.add("home__img");

  home.appendChild(homePage);
  homePage.appendChild(home_page__text);
  homePage.appendChild(createParagraph("Enjoy Delicious"));
  homePage.appendChild(createParagraph("Sushi Food"));
  homePage.appendChild(
    createParagraph(
      "Enjoy a good dinner with the bestdishes in the restourant and improveyour day."
    )
  );

  home_img.src = "./img/homeImg.png";
  home.appendChild(home_img);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const header1 = document.querySelector(".header");
  header1.appendChild(createHome());
}
