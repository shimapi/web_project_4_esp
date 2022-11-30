import Card from "./Card.js";
import {FormValidator, config} from "./FormValidator.js";


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

const cardsContainer = document.querySelector(".main-cards");

const textName = document.querySelector(".main-text__name");
const textAbout = document.querySelector(".main-text__about");
const editProfileName = document.querySelector(".edit-profile__name");
const editProfileAbout = document.querySelector(".edit-profile__about");

function handleInitialCards(){
  initialCards.forEach((cardItem) => {
    const createNewCard = new Card(cardItem,"card-template");
    cardsContainer.appendChild(createNewCard.generateCard());
  })
}

function initApp(){
  textName.textContent = originalName;
  textAbout.textContent = originalAbout;
  editProfileName.value = originalName;
  editProfileAbout.value = originalAbout;
  handleInitialCards();
  new FormValidator(config,formSelector).enableValidation();
}

initApp();