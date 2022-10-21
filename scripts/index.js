const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


const openEditProfileButton = document.querySelector(".button__edit");
const openAddPlaceButton = document.querySelector(".button__add");

const closeModalButtons = document.querySelectorAll(".button__close");
const modals = document.querySelectorAll(".modal");
const selectedModals = document.querySelectorAll("[data-target]");

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const cardsContainer = document.querySelector(".main-cards");



selectedModals.forEach((selectedModal)=>{
  selectedModal.addEventListener("click", () => {
    document.querySelector(selectedModal.dataset.target).classList.remove("modal__inactive");
    document.querySelector(selectedModal.dataset.target).classList.add("modal__active");
  })
})

function handleCloseModal(event){
  modals.forEach((modal) => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal__inactive");
  })
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}

function handleAddPlace() { //arreglaaaar
  const newPhoto = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;
  console.log(newPhoto);
  console.log(newLink);
}

function createCard(name,link){
  const newCard = document.createElement("article");
  newCard.classList.add("card");

  const newSectionPhoto = document.createElement("section")
  newSectionPhoto.className = "card__photo";

  const newButtonDelete = document.createElement("button");
  newButtonDelete.className = "button__delete";

  const newImg = document.createElement("img");
  newImg.src = link;
  newImg.alt = name;
  newImg.className = "card__image"

  const newSectionName = document.createElement("section")
  newSectionName.className = "card__name";

  const newTitle = document.createElement('h3');
  newTitle.className = "card__title";
  newTitle.textContent = name;

  const newButtonLike = document.createElement("button");
  newButtonLike.className = "button__like";

  cardsContainer.appendChild(newCard)
  newCard.appendChild(newSectionPhoto)
  newSectionPhoto.appendChild(newButtonDelete)
  newSectionPhoto.appendChild(newImg)
  newCard.appendChild(newSectionName)
  newSectionName.appendChild(newTitle)
  newSectionName.appendChild(newButtonLike)
}

function handleInitialCards(){
  initialCards.forEach((card) => {
    const name = card.name;
    const link = card.link;
    createCard(name,link);
  })
}

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
  handleInitialCards();
}

infoInicial();

const buttonsLike = document.querySelectorAll(".button__like");
const buttonsDelete = document.querySelectorAll(".button__delete");
const cards = document.querySelectorAll(".card");

console.log(cards)

function handleLikeCard(e){
  e.target.classList.toggle("button__like-active");
}
function handleDeleteCard(e){
  /*cards.forEach((card) => {
    //e.target.card.remove();
    //card.dataset.delete = "deletedCard";
    e.target.classList.add("deletedCard");
  })*/
  buttonsDelete.closest(".card").remove();

}

buttonsLike.forEach((buttonLike) => {
  buttonLike.addEventListener("click", handleLikeCard);
})

buttonsDelete.forEach((buttonDelete) => {
  buttonDelete.addEventListener("click", handleDeleteCard);
})

openEditProfileButton.addEventListener('click', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleCloseModal); 

openAddPlaceButton.addEventListener('click', handleAddPlace);
openAddPlaceButton.addEventListener('submit', handleAddPlace);
openAddPlaceButton.addEventListener('submit', handleCloseModal); 

closeModalButtons.forEach((button) => {
  button.addEventListener("click",handleCloseModal);
})





