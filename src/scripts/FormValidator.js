export default class FormValidator{
  constructor(config,formSelector){
    this._config = config;
    this._formElement = document.querySelector(formSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(config.submitButtonSelector);
  }

  _showInputError = (inputElement,errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}${this._config.errorSufix}`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}${this._config.errorSufix}`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => { 
    return this._inputList.some((inputElement) => 
       !inputElement.validity.valid);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners = () => {

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener("input",  () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
    
    this._formElement.addEventListener("reset", () => {
      this._toggleButtonState();
    });
  };

  enableValidation(){
    this._setEventListeners();
    this._toggleButtonState();
  }
}