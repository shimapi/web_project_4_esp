// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { config, userInfo } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal) {

    super(modal);

   // this.inputList = this.modal.querySelectorAll(config.inputSelector);
    this.setEventListeners();
  }
 
  _setInputValues(){
/*     if(this.inputList){
      this.inputList.forEach((input) => {
        input.value = userInfo.getUserInfo()[input.dataset.target]
        console.log("inputValue:  ____",input.value)

      })
    } 
    console.log("_setInputValues")*/
  }
  
  _getInputValues(){
 /*    this.inputList = this.modal.querySelectorAll(config.inputSelector);
    const inputValues = {};

    this.inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    
    console.log("inputValues:  -> ",inputValues)

    this._inputValues = inputValues;
    return inputValues; 
    console.log("_getInputValues: ", userInfo) */
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