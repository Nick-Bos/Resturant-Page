(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("header"),d=document.createElement("img"),a=document.createElement("p");e.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.classList.add("container"),n.classList.add("header"),d.classList.add("img"),a.classList.add("hero"),n.textContent="The Rusty Spoon",d.src="../Assets/rusty spoon.jpg",a.textContent="For all your hunger needs, here lay the Rusty Spoon that feeds"};(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("nav"),d=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");e.appendChild(t),t.appendChild(n),n.appendChild(d),n.appendChild(a),n.appendChild(c),n.classList.add("nav-bar"),d.classList.add("nav-home","button"),d.setAttribute("id","nav-home"),a.classList.add("nav-menu","button"),a.setAttribute("id","nav-menu"),c.classList.add("nav-contact","button"),c.setAttribute("id","nav-contact"),d.textContent="Home",a.textContent="Menu",c.textContent="Contact"})(),e(),document.getElementById("nav-home").addEventListener("click",(()=>{console.log("homebtn"),e()})),document.getElementById("nav-menu").addEventListener("click",(()=>{console.log("menuebtn"),(()=>{const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("button"),d=document.createElement("button"),a=document.createElement("button"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("h2"),m=document.createElement("p");e.appendChild(c),c.appendChild(t),t.appendChild(n),t.appendChild(d),t.appendChild(a),c.appendChild(o),o.appendChild(l),o.appendChild(m),l.textContent="Rusty Salad",m.textContent="A delightfully rusty salad complete with tetanus slad dressing"})()})),document.getElementById("nav-contact").addEventListener("click",(()=>{console.log("contactbtn")}))})();