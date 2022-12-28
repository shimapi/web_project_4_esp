export default class Popup{

  constructor(modal){
    this.modal = modal;
    this.closeButton = this.modal.querySelector(".button-close");

    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOutClose = this._handleOutClose.bind(this);

    //this.setEventListeners();
  }
  
  open(){
    this.modal.classList.add("modal_active"); 
  };
  
  close(){
    this.modal.classList.remove("modal_active");
  };

  _handleEscClose(e){ 
    if (e.key === "Escape" || e.key === "esc") {
      this.close();
    }
  }

  _handleOutClose(e){ 
    if (e.target.classList.contains("modal_active")) {
      this.close(e);
    }
  }

  setEventListeners(){
    this.closeButton.addEventListener("click", this.close);
    this.modal.addEventListener("click", this._handleOutClose);
    document.addEventListener("keydown", this._handleEscClose);
  }
}