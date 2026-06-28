const card = document.getElementById("birthdayCard");

let isOpen = false;

card.addEventListener("click", (e) => {

    if (e.target.closest(".photo-card")) return;

    isOpen = !isOpen;

    card.classList.toggle("open");

});

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalMessage = document.getElementById("modalMessage");

document.querySelectorAll(".photo-card img").forEach(img=>{

    img.addEventListener("click",(e)=>{

        e.stopPropagation();

        modal.classList.add("show");

        modalImage.src = img.src;

        modalMessage.textContent = img.dataset.message;

    });

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

});
