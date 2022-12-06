const pageLoad = () => {
  // declare the variables
  const content = document.getElementById("content");
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  const container = document.createElement("div");
  const header = document.createElement("header");
  const img = document.createElement("img");
  const hero = document.createElement("p");

  // append the element to their respective elements on the DOM
  content.appendChild(container);
  container.appendChild(navBar);
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);
  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(hero);

  // Add classes to variables for styling
  navBar.classList.add("nav-bar");
  home.classList.add("nav-home", "button");
  home.setAttribute("id", "nav-home");
  menu.classList.add("nav-menu", "button");
  menu.setAttribute("id", "nav-menu");
  contact.classList.add("nav-contact", "button");
  contact.setAttribute("id", "nav-contact");
  container.classList.add("container");
  header.classList.add("header");
  img.classList.add("img");
  hero.classList.add("hero");

  // element content
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  header.textContent = "The Rusty Spoon";
  img.src = "../Assets/rusty spoon.jpg";
  hero.textContent =
    "For all your hunger needs, here lay the Rusty Spoon that feeds";
};

export { pageLoad };
