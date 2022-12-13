// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { openEditProfilePopUp } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal,callback) {
    super(modal)
    this.callback = callback;
  }

  _getInputValues(){
    //recopila datos de entrada

  };
  close(){
    //reiniciar formulario cuando se cierra el popup
    super.close();
    this.modal.querySelector('.form').reset();
  }
  setEventListeners(){
    //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
    openEditProfileButton.addEventListener("click", () => {
      new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
      //handleOpenPopUp(openEditProfilePopUp)
      this.open(this.modal)
    })
  }


}