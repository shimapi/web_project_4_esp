//abre y cierra el popup
export default class Popup{

  constructor(modal){
    this.modal = modal;
    this.closeButton = this.modal.querySelector(".button-close");

    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOutClose = this._handleOutClose.bind(this);

    this.setEventListeners();
  }
  
  open(){
    console.log("_________open popup")
    console.log(this)
    this.modal.classList.add("modal_active"); 
  };
  
  close(){
    console.log("_______close popup")
    console.log(this)
    this.modal.classList.remove("modal_active");
    this.removeEventListener("keydown", this._handleEscClose);
  };

  //cerrar cuando la tecla esc es pulsada
  _handleEscClose(e){ 
    console.log("_______close _handleEscClose")
    console.log(this)
    if (e.key === "Escape" || e.key === "esc") {
      this.close();
    }
  }

  //cerrar cuando hacen click fuera del popup
  _handleOutClose(e){ 
    console.log("_______close _handleOutClose")
    console.log("THIS", this)
    console.log("eeeeee",e)
    console.log("eeeeee.TARGET",e.target)
    if (e.target.classList.contains("modal_active")) {
      this.close(e);
    }
  }

  //click al icono de cerrar el popup
  setEventListeners(){ 
    console.log("_______setEventListeners");
    console.log("THIS", this)
    console.log("MODAL", this.modal)
    console.log("CLOSE BUTTON", this.closeButton)
    this.closeButton.addEventListener("click", this.close);
    this.modal.addEventListener("click", this._handleOutClose);
    document.addEventListener("keydown", this._handleEscClose);
  }
}