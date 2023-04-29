import {
  config,
  openDeleteCardPopUp,
  /*openEditAvatarPopUp, */
  userInfo,
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

export class PopupWithForms extends Popup {
  constructor(modal) {
    super(modal);
    this.setEventListeners();
  }

  _setInputValues() {
    return userInfo;
  }

  _getInputValues() {
    return userInfo;
  }

  open() {
    super.open();
  }

  close() {
    super.close();
    if (this.modal.className.includes("place")) {
      this.modal.querySelector(config.formSelectorAddPlace).reset();
    }
  }

  setEventListeners() {
    super.setEventListeners();

    if (this.modal.classList.contains("profile")) {
      this._setInputValues();
    }

    this.modal.querySelector(".form").addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const newFormValidator = new FormValidator(config, this.modal);
    newFormValidator.enableValidation();
  }
}

export const popupWithFormsDeleteCard = new PopupWithForms(openDeleteCardPopUp);
/* export const popupWithFormsEditAvatar = new PopupWithForms(openEditAvatarPopUp); */
