console.log("Olá Mundo!");

const botao = document.getElementById("botaoquefala");

botao.addEventListener('click', () => alert("Fui clicado!!!"));
botao.addEventListener("mouseover", () => {
    alert("Assedio.");
});

const divs = document.querySelectorAll("div");
divs.forEach((item, key) => {
   item.addEventListener("click", () => {
     alert("cliquei na div" + key);
    });
});

const qualBotao = (evt) => {
    alert(`Você clicou em "${evt.currentTarget.textContent}"`);
}

const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
    botao.addEventListener("click", qualBotao);
});