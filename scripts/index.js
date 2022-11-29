import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

console.log(FormValidator)
console.log(Card)

const originalName = "Jacques Cousteau";
const originalAbout = "Explorer";

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


const openEditProfileButton = document.querySelector(".button-edit");
const openAddPlaceButton = document.querySelector(".button-add");

const closeModalButtons = document.querySelectorAll(".button-close");

const modals = document.querySelectorAll(".modal");
const modalContainer = document.querySelector(".modal__container");
const modalActive = document.querySelector(".modal_active");

const popups = document.querySelectorAll('.popup')

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const cardsContainer = document.querySelector(".main-cards");

const textName = document.querySelector(".main-text__name");
const textAbout = document.querySelector(".main-text__about");
const editProfileName = document.querySelector(".edit-profile__name");
const editProfileAbout = document.querySelector(".edit-profile__about");

const addPlaceName = document.querySelector(".add-place__name");
const addPlaceLink = document.querySelector(".add-place__link");

const card = document.querySelector(".card");
const cardTemplate = document.getElementById("card-template").content;

const imgPopup = document.querySelector(".photo-popup__image");
const titlePopup = document.querySelector(".photo-popup__title");




function handleInitialCards(){
  initialCards.forEach((card) => {
    const newCard = new Card(card.name,card.link,card.desc)
    
    cardsContainer.appendChild(newCard.createCard());



    /* document.createElement()
    document.querySelector()
    document.createDocumentFragment() */
  })
}

function initApp(){
  textName.textContent = originalName;
  textAbout.textContent = originalAbout;
  editProfileName.value = originalName;
  editProfileAbout.value = originalAbout;
  handleInitialCards();
}

initApp();
