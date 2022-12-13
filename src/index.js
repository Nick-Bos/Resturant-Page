import { NavBar } from "../dist/nav-bar";
import { pageLoad } from "../dist/page-load";
import { menuPage } from "../dist/menu-page";
import { contactPage } from "../dist/contact-page";

//init page function calls
NavBar();
pageLoad();

//Tab swithing functions
function clearContent() {
  const contents = document.getElementById("content");
  const remove = contents.childNodes[1];
  remove.remove();
}

//navbar button event listener functions
const homBtn = document
  .getElementById("nav-home")
  .addEventListener("click", () => {
    console.log("homebtn");
    clearContent();
    pageLoad();
  });

const menuBtn = document
  .getElementById("nav-menu")
  .addEventListener("click", () => {
    console.log("menuebtn");
    clearContent();
    menuPage();
  });

const contactBtn = document
  .getElementById("nav-contact")
  .addEventListener("click", () => {
    console.log("contactbtn");
    clearContent();
    contactPage();
  });
