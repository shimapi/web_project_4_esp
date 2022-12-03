class FormValidator{

  constructor(config,formSelector){
    this._config = config;
    this._formSelector = formSelector;
    this._inputSelector = document.querySelector(this._config.inputSelector);
    this._inputListElement = document.querySelector(this._config.inputSelector);
//     el inputListElement, buttonElement y config lo deberias obtener del constructo

  }

  _showInputError = (errorMessage) => {
    const errorElement = this._formSelector.querySelector(`.${this._inputSelector.id}${this._config.errorSufix}`);
    this._inputSelector.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };
  
  _hideInputError = () => {
    const errorElement = _formSelector.querySelector(`.${this._inputSelector.id}${this._config.errorSufix}`);
    this._inputSelector.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInputValidity = (inputSelector) => {
    if (!inputSelector.validity.valid) {
      this._showInputError(_formSelector, inputSelector, inputSelector.validationMessage, this._config)
    } else {
      this._hideInputError(_formSelector, inputSelector, this._config);
    }
  };

  _hasInvalidInput = (inputListElement) => {
    return inputListElement.some((inputSelector) => 
       !inputSelector.validity.valid);
  };
  
  _toggleButtonState = (inputListElement, buttonElement) => {
    if (this._hasInvalidInput(inputListElement)) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners = (inputList, formSelector) => {
    const buttonElement = formSelector.querySelector(this._config.submitButtonSelector);

    inputList.forEach(inputSelector => {
      inputSelector.addEventListener("input",  () => {
       
        this._checkInputValidity(formSelector, inputSelector);
        this._toggleButtonState(inputListElement, buttonElement);
      })
    })

    this._toggleButtonState(inputListElement, buttonElement);


    formElement.addEventListener("reset", () => {
      this._toggleButtonState(inputListElement, buttonElement, config);
    });
  };

  enableValidation(){
    const formSelector = document.querySelector(this._formSelector);
    const inputList = Array.from(formSelector.querySelectorAll(this._config.inputSelector));
    this._setEventListeners(inputList,formSelector);
  }
}

export default FormValidator;