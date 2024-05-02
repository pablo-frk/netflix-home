let estrelasVazias = document.getElementsByClassName("estrela-vazia");

let dirEstrelaGold = "/img/estrela-gold.png";
let dirEstrelaVazia = "/img/estrela-vazia.png";

for (let i = 0; i < estrelasVazias.length; i++) {
    let estrelaVazia = estrelasVazias[i];

    estrelaVazia.addEventListener("mouseenter", function () {
        estrelaVazia.setAttribute("src", dirEstrelaGold);
    });

    estrelaVazia.addEventListener("mouseleave", function () {
        estrelaVazia.setAttribute("src", dirEstrelaVazia);
    });
}
