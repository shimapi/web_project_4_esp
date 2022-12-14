// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { config, openEditProfilePopUp } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal,handleSubmit) {
    super(modal)
    this.handleSubmit = handleSubmit;
  }

  _getInputValues(){
    this.inputList = this.modal.querySelectorAll(config.inputSelector);
    const inputValues = {};

    this.inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    console.log(inputValues)
    return inputValues;

  };
  close(){
    //reiniciar formulario cuando se cierra el popup
    super.close();
    this.modal.querySelector('.form').reset();
  }
  setEventListeners(){
    //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
/*     openEditProfileButton.addEventListener("click", () => {
      new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
      //handleOpenPopUp(openEditProfilePopUp)
      this.open(this.modal)
    }) */
  }


}