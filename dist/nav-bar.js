const NavBar = () => {
  //static navbar
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  content.appendChild(container);
  container.appendChild(navBar);
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  // Add classes to variables for styling
  navBar.classList.add("nav-bar");
  home.classList.add("nav-home", "button");
  home.setAttribute("id", "nav-home");
  menu.classList.add("nav-menu", "button");
  menu.setAttribute("id", "nav-menu");
  contact.classList.add("nav-contact", "button");
  contact.setAttribute("id", "nav-contact");

  //element content
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
};

export { NavBar };
