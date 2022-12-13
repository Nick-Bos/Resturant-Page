const menuPage = () => {
  // declare the variables
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const mealOne = document.createElement("div");
  const mealOneTitle = document.createElement("h2");
  const mealOneInfo = document.createElement("p");

  // append the element to their respective elements on the DOM
  content.appendChild(container);
  container.appendChild(mealOne);
  mealOne.appendChild(mealOneTitle);
  mealOne.appendChild(mealOneInfo);

  // element content
  mealOneTitle.textContent = "Rusty Salad";
  mealOneInfo.textContent =
    "A delightfully rusty salad complete with tetanus slad dressing";
};

export { menuPage };
