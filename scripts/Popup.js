//abre y cierra el popup

import { 
  modals,
  closeModalButtons
} from "./constants.js";

export default class Popup{
  constructor(modal){
    this.modal = modal;
  }
  
  open(){
    console.log("open popup")
    console.log(this)
    this.modal.classList.add("modal_active"); 
  };
  
  close(){
    console.log("close popup")
    console.log(this)
    this.modal.classList.remove("modal_active");
    //document.removeEventListener("keydown", this.close());
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
  setEventListeners(e){ 
    console.log("setEventListeners");

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", this.close(e));
      console.log(closeModalButtons)
    })

    document.addEventListener("keydown", this._handleEscClose(e));
    
    modals.forEach((modal) => {
      modal.addEventListener("click", this._handleOutClose(e));
    })
  }
}