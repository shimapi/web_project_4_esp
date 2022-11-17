const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}${config.errorSufix}`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}${config.errorSufix}`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

//Solo se fija si el input es valido o no
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config)
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputListElement) => {
  return inputListElement.some((inputElement) => {
    console.log(inputElement)
    console.log(inputElement.validity.valid);
    console.log("---------------------------------------")
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputListElement, buttonElement, config) => {
  if (hasInvalidInput(inputListElement)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};



//Añade los eventos a TODOS los elementos
const setEventListeners = (inputListElement, formElement, config) => {

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

//  un controlador `reset`
  formElement.addEventListener('reset', () => {
    // 'setTimeout' es necesario para esperar a que se borre el formulario (la llamada desaparecerá al final de la pila) y solo entonces llamar a `toggleButtonState`
    setTimeout(() => {
      toggleButtonState(inputListElement, buttonElement, config);    
    }, 0); // basta con especificar 0 milisegundos para que después de `reset` se active la acción
  });


};

//Consigue los elementos que hay que validar
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    setEventListeners(inputList, formElement, config);
  });
};

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button-save",
  inactiveButtonClass: "button-inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  errorSufix: "-error"
}
enableValidation(config);