import {
	config,
	openDeleteCardPopUp,
	openEditAvatarPopUp,
	userInfo,
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

export class PopupWithForms extends Popup {
	constructor(modal, handleFormSubmit) {
		super(modal);
		this.formElement = this.modal.querySelector(".form");
		this.handleFormSubmit = handleFormSubmit;
		this.submitForm = this.submitForm.bind(this);
	}

	_setInputValues() {
		return userInfo;
	}

	_getInputValues() {
		this.inputList = this.formElement.querySelectorAll(".form__input");
		this.formValues = {};
		this.inputList.forEach((input) => {
			return (this.formValues[input.name] = input.value);
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

	submitForm(e) {
		e.preventDefault();
		this.handleFormSubmit(this._getInputValues());
		this.close();
	}

	setEventListeners() {
		super.setEventListeners();

		if (this.modal.classList.contains("profile")) {
			this._setInputValues();
		}

		this.formElement.addEventListener("submit", this.submitForm);

		const newFormValidator = new FormValidator(config, this.modal);
		newFormValidator.enableValidation();
	}
}

export const popupWithFormsDeleteCard = new PopupWithForms(openDeleteCardPopUp);
export const popupWithFormsEditAvatar = new PopupWithForms(openEditAvatarPopUp);
