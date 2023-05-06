
import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(modal, handleFormSubmit) { 
      super(modal);
      this.formElement = this.modal.querySelector(".form");
      this.handleFormSubmit = handleFormSubmit;
      //bind para poder removerlo -> hacer en popupwithfrms
      this.submitForm = this.submitForm.bind(this);
    }

    open() {
        this.setEventListeners();
        super.open();
    }
//crear metodo para enviar
    submitForm(e){
        e.preventDefault();
        this.handleFormSubmit();
        this.close()
    }

    close(){
        super.close();
        this.formElement.removeEventListener("submit", this.submitForm)
    }

    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", this.submitForm);
    
      }
}  