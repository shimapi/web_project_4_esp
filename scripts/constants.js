export const originalName = "Jacques Cousteau";
export const originalAbout = "Explorer";

export const initialCards = [
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

export const cardsContainer = document.querySelector(".main-cards");
/* export const textName = document.querySelector(".main-text__name");
export const textAbout = document.querySelector(".main-text__about"); */
export const textName = ".main-text__name";
export const textAbout = ".main-text__about";
export const editProfileName = ".edit-profile__name";
export const editProfileAbout = ".edit-profile__about";
//export const editProfileName = document.querySelector(".edit-profile__name");
//export const editProfileAbout = document.querySelector(".edit-profile__about");
//export const formSelectorProfile = ".edit-profile__form";
//export const formSelectorAddPlace = ".add-place__form";

export const openEditProfileButton = document.querySelector(".button-edit");
export const openAddPlaceButton = document.querySelector(".button-add");

export const closeModalButtons = document.querySelectorAll(".button-close");

export const modals = document.querySelectorAll(".modal");

export const openEditProfilePopUp = document.querySelector(".edit-profile");
export const openAddPlacePopUp = document.querySelector(".add-place");

export const addPlaceName = document.querySelector(".add-place__name");
export const addPlaceLink = document.querySelector(".add-place__link");


export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button-save",
  inactiveButtonClass: "button-inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  errorSufix: "-error",
  formSelectorProfile: ".edit-profile__form",
  formSelectorAddPlace: ".add-place__form",
  cardTemplate: ".card-template"
}