//abre y cierra el popup

import { modals, closeModalButtons } from "./constants.js";

export default class Popup{
  constructor(modal){
    this.modal = modal;
  }
  
  open(modal){
    modal.classList.add("modal_active");
  };
  
  close(e){
    modals.forEach((modal) => {
      modal.classList.remove("modal_active");
      document.removeEventListener("keydown", 
        this._handleEscClose(e));
    });
  };

  //cerrar cuando la tecla esc es pulsada
  _handleEscClose(e){ 
    if (e.key === "Escape" || e.key === "esc") {
      this.close(e);
    }
  }

  //cerrar cuando hacen click fuera del popup
  _handleOutClose(e){ 
    if (e.target.classList.contains("modal_active")) {
      this.close(e);
    }
  }

  //click al icono de cerrar el popup
  setEventListeners(){ 
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", this.close(e));
    })
    document.addEventListener("keydown", this._handleEscClose(e));

  }


}