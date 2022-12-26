// callback del envio del formulario al constructor
// selector de popup

//crear una instancia de PopupWithForm para cada popup

import { config, userInfo } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal,handleFormSubmit) {

    super(modal)
    
    this.handleFormSubmit = handleFormSubmit;
    this.inputList = this.modal.querySelectorAll(config.inputSelector)
    this.setEventListeners()
  }
 
  _setInputValues(){
    //console.log(userInfo.getUserInfo())
    //console.log(this.inputList)
    if(this.inputList){
      this.inputList.forEach((input) => {
/*         console.log(userInfo.getUserInfo())
        console.log(input.dataset.target) */
        input.value = userInfo.getUserInfo()[input.dataset.target]
     //   console.log("input.value",input.value);
      })
    }
  }
  
  _getInputValues(){
    //this.inputList = this.modal.querySelectorAll(config.inputSelector);
    const inputValues = {};

    this.inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    
    //console.log(inputValues)

    this._inputValues = inputValues;
    return inputValues;
  }

  close(){
    //reiniciar formulario cuando se cierra el popup
    super.close();
    this.modal.querySelector('.form').reset();
  }
  
  setEventListeners(){
    if(this.modal.className.includes("profile")){
      this._setInputValues()
    }

    console.log("setEventListeners de PopupWithForm")

    super.setEventListeners();

    this.modal.querySelector('.form').addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit()
    })
  }
}