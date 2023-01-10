import { config, userInfo } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(modal) {

    super(modal);

    this.setEventListeners();
    const formAddPlace = this.modal.querySelector(config.formSelectorAddPlace);
    const formProfile = this.modal.querySelector(config.formSelectorProfile);
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
      const newFormValidator = new FormValidator(config,config.formSelectorProfile);
      newFormValidator.enableValidation();
    }else if(this.modal.className.includes("place")){
      const newFormValidator = new FormValidator(config,config.formSelectorAddPlace);
      newFormValidator.enableValidation();
    }
    

    this.modal.querySelector('.form').addEventListener("submit", (e) => {
      e.preventDefault();

    })
    //Aca, donde se abre el popup que tiene un formulario dentro (osea el de perfil y place)
    //podes acceder al formulario en si, fijate que en la linea de arriba justo lo vas a seleccionar 
    //Este elemento formulario dentro del modal, sea cual sea, lo podrias guardar en una variable
    //Con esa variable podrias usarla para ponerle el evento submit como haces arriba
    //Ahora tenes que validar al formulario pero eso lo tiene la clase FormValidator asi que tendrias que importarla primero y crear una nueva instancia por cada formulario, asi que aca podrias aprovechar y hacerle new
    //Fijate que FormValidator ya recibe dos parametros, el objeto config y el selector del formulario para seleccionarlo, pero vos ya lo tenes seleccionado en teoria en los primeros pasos, asi que eso podrias modificarlo levemente en esa clase para adaptarlo
    //Luego le das inicio a su metodo enableValidation como hacias antes y listo, se supone que la clase deberia funcionar sola
  }
}