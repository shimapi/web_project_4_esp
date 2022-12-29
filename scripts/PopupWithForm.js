import { config, userInfo } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal) {

    super(modal);

    this.setEventListeners();
  }
 
  _setInputValues(){
    return userInfo;
  }
  
  _getInputValues(){
    return userInfo;
  }

  close(){
    super.close();
    if(this.modal.className.includes("place")){
      this.modal.querySelector(config.formSelectorAddPlace).reset();
    }
  }
  
  setEventListeners(){
    
    super.setEventListeners();

    if(this.modal.className.includes("profile")){
      this._setInputValues()
    }

    this.modal.querySelector('.form').addEventListener("submit", (e) => {
      e.preventDefault();
    })

  }
}