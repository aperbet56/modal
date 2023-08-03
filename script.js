// Récupération des différents éléments
const modalContainer = document.querySelector(".modal__container");
const modalTriggers = document.querySelectorAll(".modal__trigger");

// Fonction toggleModal qui va permettre de déclencher la modale
const toggleModal = () => {
  modalContainer.classList.toggle("active");
};

// Ecoute de l'événement click sur chaque déclencheur et appel de la fonction toggleModal
modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);
