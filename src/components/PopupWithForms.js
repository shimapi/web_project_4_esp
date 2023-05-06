import {
  config,
  openDeleteCardPopUp,
  openEditAvatarPopUp,
  userInfo,
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

export class PopupWithForms extends Popup {
  constructor(modal, handleFormSubmit) { //logica de guardado
    super(modal);
    this.formElement = this.modal.querySelector(".form");
    this.handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this.inputList = this.formElement.querySelectorAll(".form__input");
    this.formValues = {};
    console.log(this.inputList)
    this.inputList.forEach(input => {
      return this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  open() {
    this.setEventListeners();
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

    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit(this._getInputValues());
      //guarde el popup
      this.close()
    });

    const newFormValidator = new FormValidator(config, this.modal);
    newFormValidator.enableValidation();
  }
}

export const popupWithFormsDeleteCard = new PopupWithForms(openDeleteCardPopUp);
 export const popupWithFormsEditAvatar = new PopupWithForms(openEditAvatarPopUp);