export default loadAboutUs;
import "./style.css";

function createAboutUs() {
  imgAbout = document.createElement("img");

  const aboutUs = document.createElement("h4");
  const title = document.createElement("h2");
  const text = document.createElement("h3");

  aboutUs.textContent = "About Us";
  title.textContent = "We Provide Healthy Food";
  text.textContent =
    "Food comes to us from our relatives whether they have wings  or roots . This is how we consider food. It also has a culture. It has a history that passes from generation to genneration.";
  aboutUs.appendChild(title);
  title.appendChild(text);

  return aboutUs;
}

function loadAboutUs() {
  const header1 = document.querySelector(".header");
  header1.appendChild(createAboutUs());
}
