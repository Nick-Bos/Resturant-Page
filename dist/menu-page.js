const menuPage = () => {
  // declare the variables
  const content = document.getElementById("content");
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  const container = document.createElement("div");
  const mealOne = document.createElement("div");
  const mealOneTitle = document.createElement("h2");
  const mealOneInfo = document.createElement("p");

  // append the element to their respective elements on the DOM
  content.appendChild(container);
  container.appendChild(navBar);
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);
  container.appendChild(mealOne);
  mealOne.appendChild(mealOneTitle);
  mealOne.appendChild(mealOneInfo);

  // element content
  mealOneTitle.textContent = "Rusty Salad";
  mealOneInfo.textContent =
    "A delightfully rusty salad complete with tetanus slad dressing";
};

export { menuPage };
