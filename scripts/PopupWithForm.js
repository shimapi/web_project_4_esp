// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { openEditProfilePopUp, originalAbout, originalName } from "./constants";
import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(modal){
    super(this.modal)
  }
  _getInputValues(){
    //recopila datos de entrada
    console.log( "name", originalName )
    console.log( "about", originalAbout )
  };
  setEventListeners(){
    //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
    openEditProfileButton.addEventListener("click", () => {
      new Popup(openEditProfilePopUp).open(openEditProfilePopUp)
      //handleOpenPopUp(openEditProfilePopUp)
      this.open(this.modal)
    })
  }

  close(){
    //reiniciar formulario cuando se cierra el popup
  }
}