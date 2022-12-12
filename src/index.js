import { pageLoad } from "../dist/page-load";
import { menuPage } from "../dist/menu-page";
import { NavBar } from "../dist/nav-bar";

//init page function calls
NavBar();
pageLoad();

//navbar button event listener functions
const homBtn = document
  .getElementById("nav-home")
  .addEventListener("click", () => {
    console.log("homebtn");
    pageLoad();
  });

const menuBtn = document
  .getElementById("nav-menu")
  .addEventListener("click", () => {
    console.log("menuebtn");
    menuPage();
  });

const contactBtn = document
  .getElementById("nav-contact")
  .addEventListener("click", () => {
    console.log("contactbtn");
  });
