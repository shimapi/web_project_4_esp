export default class FormValidator{
  
  constructor(config,formSelector){
    this._config = config;
    this._formSelector = formSelector;
  }

  _showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}${config.errorSufix}`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  _hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}${config.errorSufix}`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, config)
    } else {
      this._hideInputError(formElement, inputElement, config);
    }
  };

  _hasInvalidInput = (inputListElement) => {
    return inputListElement.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  _toggleButtonState = (inputListElement, buttonElement, config) => {
    if (this._hasInvalidInput(inputListElement)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners = (inputListElement, formElement, config) => {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    inputListElement.forEach(inputElement => {
      inputElement.addEventListener("input",  () => {
       
        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(inputListElement, buttonElement, config);
      })
    })

    this._toggleButtonState(inputListElement, buttonElement, config);

    formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputListElement, buttonElement, config);    
      }, 0);
    });


  };

  enableValidation(){
    const formElement = document.querySelector(this._formSelector);
    const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
    this._setEventListeners(inputList, formElement,this._config);
  }
}




