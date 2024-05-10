/* console.log("Funciona!!!!!");

window.console.log("Pelo window");
console.log(window.location.href);
console.log(window.navigator.language);
console.log(window.navigator.platform);
console.log(window.navigator.userAgent);

console.log(window.screen.width);
console.log(window.screen.height); 

console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.body.children);

let titulo = document.body.children[0];
console.log(titulo);

let lista = document.body.children[1];
console.log(lista);

console.log(lista.firstElementChild);
console.log(lista.lastElementChild);
console.log(lista.parentElement);

console.log(document.getElementById("listinha"));
console.log(document.getElementById("Item01"));*/

//SEGUNDA PARTE DA AULA
/* 

console.log(document.querySelectorAll(".ordenada"));
console.log(document.querySelector(".ordenada")); 

console.log(document.querySelector(".ordenada").matches(".ordenada"));

let lista = document.querySelector(".ordenada");

console.log(lista.matches("#listinha"));

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("ordenada"));

let titulo = document.getElementById("titulo");
titulo.innerText = "<i>Mudei</i>";

let logo = document.getElementsByTagName("img") [0];
logo.setAttribute("alt", "Logo da ETEAB");
logo.removeAttribute("alt");
console.log(logo.getAttribute("alt"));

titulo.classList.add("vermelho");
titulo.classList.remove("vermelho");

titulo.classList.add("roxo");
titulo.classList.contains("roxo");

titulo.classList.toggle("negrito");

let paragrafo = document.getElementById("paragrafo01");
paragrafo.style.fontSize = "20px";
paragrafo.style.color = "green";
paragrafo.style.marginLeft = "100px"; */

//Criando elementos pelo js
let titulo02 = document.createElement("h2");
titulo02.innerText = "kueizy kueizy kueizy";

let paragrafo = document.getElementById("base");
paragrafo.append(titulo02);
paragrafo.prepend(titulo02);

paragrafo.before(titulo02);
paragrafo.after(titulo02);

titulo02.remove();

//Exemplo lista
let tarefas = document.getElementById("tarefas");

let item = document.createElement("li");
item.innerText = "Chegar no horário de aula";

tarefas.append(item);