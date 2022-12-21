//es una clase hija de Popup

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(modal,handleSubmit) {

    super(modal)
    /* 
    this.handleSubmit = handleSubmit;
    this.inputList = this.modal.querySelectorAll(config.inputSelector) */
    //Esta es la que deje comentada en el new PopupWithForm()
    this.setEventListeners()
  }
  open(openPopupImage){
    //src = img
    //alt = titulo
    //alt leyenda de imagen
  };
}