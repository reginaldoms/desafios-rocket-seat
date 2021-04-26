const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal_overlay');

for(let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        const modalContent = modalOverlay.querySelector('.modal_content')
        modalContent.classList.add('modalDetail')
        modalContent.innerHTML = "";        
        modalContent.appendChild(card);
        const card_clone = card.cloneNode(true)
        modalContent.appendChild(card_clone);
    })
};
document.querySelector(".modal_close").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
});