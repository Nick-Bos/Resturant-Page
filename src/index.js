import { pageLoad } from "../dist/page-load";
pageLoad();

import { menuPage } from "../dist/menu-page";

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
