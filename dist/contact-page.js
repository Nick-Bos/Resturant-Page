const contactPage = () => {
  //Declare the variables
  const content = document.getElementById("content");
  const container = document.createElement("div");
  const name = document.createElement("h2");
  const numberLabel = document.createElement("h4");
  const number = document.createElement("p");

  // append the element to their respective elements on the DOM
  content.appendChild(container);
  container.appendChild(name);
  container.appendChild(numberLabel);
  container.appendChild(number);

  // element content
  name.textContent = "The Rusty Spoon";
  numberLabel.textContent = "Phone No.";
  number.textContent = "1800 `RUST`";
};

export { contactPage };
