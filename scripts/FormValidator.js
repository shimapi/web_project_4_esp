export class FormValidator{
  //constructor(objConfiguracion,formularioAValidar){
  constructor(config,formSelector){
    //obj: selectores y clases del formulario
    //form: toma un elemento del form a validar
    this._config = config;
    this._formSelector = formSelector.formSelector;
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
  
  //_comprobarValidezCampo(){}
  _checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      _showInputError(formElement, inputElement, inputElement.validationMessage, config)
    } else {
      _hideInputError(formElement, inputElement, config);
    }
  };

  _hasInvalidInput = (inputListElement) => {
    return inputListElement.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  _toggleButtonState = (inputListElement, buttonElement, config) => {
    if (_hasInvalidInput(inputListElement)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };


  //Añade los eventos a TODOS los elementos
  _setEventListeners = (inputListElement, formElement, config) => {

    //_cambiarEstadoBotonSubmit(){}
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    inputListElement.forEach(inputElement => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputListElement, buttonElement, config);
      })
    })

    // aquí, para comprobar el estado del botón al principio
    toggleButtonState(inputListElement, buttonElement, config);

    formElement.addEventListener('reset', () => {
      // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
      setTimeout(() => {
        toggleButtonState(inputListElement, buttonElement, config);    
      }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
    });


  };


  //_agregarControladoresNecesarios(){}

  static enableValidation(config){
    //activa validacion del formulario
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
      setEventListeners(inputList, formElement, config);
    });
  }

}




export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button-save",
  inactiveButtonClass: "button-inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  errorSufix: "-error"
}
