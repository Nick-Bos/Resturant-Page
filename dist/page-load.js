const pageLoad = () => {
  // declare the variables
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const header = document.createElement("header");
  const img = document.createElement("img");
  const hero = document.createElement("p");

  // append the element to their respective elements on the DOM
  content.appendChild(container);
  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(hero);

  // Add classes to variables for styling
  container.classList.add("container");
  header.classList.add("header");
  img.classList.add("img");
  hero.classList.add("hero");

  header.textContent = "The Rusty Spoon";
  img.src = "../Assets/rusty spoon.jpg";
  hero.textContent =
    "For all your hunger needs, here lay the Rusty Spoon that feeds";
};

export { pageLoad };
