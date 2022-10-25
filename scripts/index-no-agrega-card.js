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
const selectedModals = document.querySelectorAll("[data-target]"); //tomo cada modal de forma individual

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const cardsContainer = document.querySelector(".main-cards");




function createCard(name,link){
  const newCard = document.createElement("article");
  newCard.classList.add("card");

  const newSectionPhoto = document.createElement("section")
  newSectionPhoto.className = "card__photo";

  const newButtonDelete = document.createElement("button");
  newButtonDelete.className = "button__delete";
  newButtonDelete.addEventListener("click", handleDeleteCard);

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
  newButtonLike.addEventListener("click", handleLikeCard);

  newCard.appendChild(newSectionPhoto)//No modifica la pantalla
  newSectionPhoto.appendChild(newButtonDelete)//No modifica la pantalla
  newSectionPhoto.appendChild(newImg)//No modifica la pantalla
  newCard.appendChild(newSectionName)//No modifica la pantalla
  newSectionName.appendChild(newTitle)//No modifica la pantalla
  newSectionName.appendChild(newButtonLike)//No modifica la pantalla

  //cardsContainer.appendChild(newCard)//SI modifica la pantalla porque cardsContainer si existe en el HTML
  return newCard
}



function handleInitialCards(){
  initialCards.forEach((card) => {
    const name = card.name;
    const link = card.link;
    const new_card = createCard(name,link);
    cardsContainer.appendChild(new_card);
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








/* selectedModals.forEach((selectedModal)=>{
  selectedModal.addEventListener("click", () => {
    console.log(selectedModal.dataset.target)
    //document.querySelector(selectedModal.dataset.target).classList.remove("modal__inactive");
    //document.querySelector(selectedModal.dataset.target).classList.add("modal__active");
  })
})
 */

openEditProfileButton.addEventListener("click", () => {
  document.querySelector(openEditProfileButton.dataset.target).classList.remove("modal__inactive");
  document.querySelector(openEditProfileButton.dataset.target).classList.add("modal__active");
})

openAddPlaceButton.addEventListener("click", () => {
  document.querySelector(openAddPlaceButton.dataset.target).classList.remove("modal__inactive");
  document.querySelector(openAddPlaceButton.dataset.target).classList.add("modal__active");
})

function handleCloseModal(event){
  modals.forEach((modal) => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal__inactive");
  })
}

function handleProfileFormSubmit(event) {
  console.log("test")
  event.preventDefault();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}

function handleAddPlaceFormSubmit(event) {
  event.preventDefault();
  const newPhoto = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;
  //console.log(createCard(newPhoto,newLink));
  //createCard(newPhoto,newLink);
  const new_card = createCard(newPhoto,newLink)

  cardsContainer.prepend(new_card);
  //event.target.reset();

  openEditProfileButton.addEventListener("click", () => {
    document.querySelector(openEditProfileButton.dataset.target).classList.remove("modal__inactive");
    document.querySelector(openEditProfileButton.dataset.target).classList.add("modal__active");
  })
  
  openAddPlaceButton.addEventListener("click", () => {
    document.querySelector(openAddPlaceButton.dataset.target).classList.remove("modal__inactive");
    document.querySelector(openAddPlaceButton.dataset.target).classList.add("modal__active");
  })
  
}


//const buttonsLike = document.querySelectorAll(".button__like");
//const buttonsDelete = document.querySelectorAll(".button__delete");
const cards = document.querySelectorAll(".card");

function handleLikeCard(e){
  e.target.classList.toggle("button__like-active");
}

function handleDeleteCard(e){
  /*cards.forEach((card) => {
    //e.target.card.remove();
    //card.dataset.delete = "deletedCard";
    e.target.classList.add("deletedCard");
  })*/
  //buttonsDelete.closest(".card").remove();
  //console.log(buttonsDelete.closest(".card"))
  //e.target.classList.toggle("DELETE");
  
   // e.parentElement.remove();
    console.log(e.parentElement)

}

/* buttonsLike.forEach((buttonLike) => {
  buttonLike.addEventListener("click", handleLikeCard);
}) */

/* buttonsDelete.forEach((buttonDelete) => {
  buttonDelete.addEventListener("click", handleDeleteCard);
})
 */
//openEditProfileButton.addEventListener('click', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleCloseModal); 

//openAddPlaceButton.addEventListener('click', handleAddPlaceFormSubmit);
//openAddPlaceButton.addEventListener('submit', handleAddPlaceFormSubmit);
//openAddPlaceButton.addEventListener('submit', handleCloseModal); 
document.querySelector(".button.button__create").addEventListener('click', handleAddPlaceFormSubmit);

closeModalButtons.forEach((button) => {
  button.addEventListener("click",handleCloseModal);
})





