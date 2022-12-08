// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(){

  }
  _getInputValues(){
    //recopila datos de entrada
  };
  setEventListeners(){
    //modifica: debe agregar el formulario un controlador de eventos submit
    //setEventListener click con el icono cerrar
  }

  close(){
    //reiniciar formulario cuando se cierra el popup
  }
}