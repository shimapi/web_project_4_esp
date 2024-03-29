import UserInfo from "./UserInfo.js";

export const cardsContainer = document.querySelector(".main-cards");
export const textNameSelected = document.querySelector(".main-text__name");
export const textAboutSelected = document.querySelector(".main-text__about");
export const textName = ".main-text__name";
export const textAbout = ".main-text__about";
export const imgAvatar = ".avatar__circle";
export const editAvatar = ".avatar__edit";
export const editProfileName = document.querySelector(".edit-profile__name");
export const editProfileAbout = document.querySelector(".edit-profile__about");
export const editProfileAvatar = document.querySelector(".edit-avatar__link");

export const closeModalButtons = document.querySelectorAll(".button-close");
export const cardImages = document.querySelectorAll(".card__image");
export const modals = document.querySelectorAll(".modal");

export const closeModalButton = document.querySelector(".button-close");
export const openEditProfileButton = document.querySelector(".button-edit");
export const openAddPlaceButton = document.querySelector(".button-add");
export const openEditProfilePopUp = document.querySelector(".edit-profile");
export const openEditAvatarPopUp = document.querySelector(".edit-avatar");
export const openDeleteCardPopUp = document.querySelector(".delete-card");
export const openAddPlacePopUp = document.querySelector(".add-place");
export const openPhotoPopUp = document.querySelector(".photo-popup");
export const addPlaceName = document.querySelector(".add-place__name");
export const addPlaceLink = document.querySelector(".add-place__link");

export const userId = "1a6f012a04b64dbf77f975bf";

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
	cardTemplate: ".card-template",
};

export const userInfo = new UserInfo(textName, textAbout, imgAvatar);
