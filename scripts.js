const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function () {

        const img = card.getElementsByTagName("img")[0].getAttribute("src");
        const titulo = card.getElementsByTagName("p")[0].innerHTML;
        const autor = card.getElementsByTagName("p")[1].innerHTML

        modalOverlay.classList.toggle('active');

        modalOverlay.querySelector("img").src = img;
        document.getElementById("receitas_modal_titulo").innerHTML = titulo;
        document.getElementById("receitas_modal_autor").innerHTML = autor;
    })
}

document.getElementById("receitas_modal_fechar").addEventListener("click", function () {
    modalOverlay.classList.toggle('active');
})
