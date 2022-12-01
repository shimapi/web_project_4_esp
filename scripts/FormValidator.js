export default class FormValidator{
  //constructor(objConfiguracion,formularioAValidar){
  constructor(config,formSelector){
    //obj: selectores y clases del formulario
    //form: toma un elemento del form a validar
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
  
  //_comprobarValidezCampo(){}
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


  //Añade los eventos a TODOS los elementos
  _setEventListeners = (inputListElement, formElement, config) => {
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    inputListElement.forEach(inputElement => {
      inputElement.addEventListener("input",  () => {
       
        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(inputListElement, buttonElement, config);
      })
    })

    // aquí, para comprobar el estado del botón al principio
    this._toggleButtonState(inputListElement, buttonElement, config);

    formElement.addEventListener('reset', () => {
      // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
      setTimeout(() => {
        this._toggleButtonState(inputListElement, buttonElement, config);    
      }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
    });


  };


  //_agregarControladoresNecesarios(){}

  enableValidation(){
    const formElement = document.querySelector(this._formSelector);
        //activa validacion del formulario
   
      const inputList = Array.from(formElement.querySelectorAll(this._config.inputSelector));
      this._setEventListeners(inputList, formElement,this._config);
    
  }

}




