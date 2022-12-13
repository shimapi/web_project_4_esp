// presentar información sobre el usuario en la

import { config,
  editProfileAbout,
  editProfileName,
  formSelectorAddPlace,
  formSelectorProfile,
  openEditProfilePopUp,
  originalAbout,
  originalName
} from "./constants.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";

export default class UserInfo{
  constructor({originalName,originalAbout}){
    this.textName = originalName;
    this.textAbout = originalAbout;
  }
  getUserInfo(){
    //devuelve un obj con info
    //se usa para mostrar los datos del usuario en el POPUP
    //const obj = {(this.textName),(this.textAbout)};
    const popup = new Popup(openEditProfilePopUp)
    const obj = {editProfileName,editProfileAbout}
    return popup;
  };
  setUserInfo(){
    //toma los datos del nuevo usuario y los agrega a la pag
    this.textName.textContent = originalName;
    this.textAbout.textContent = originalAbout;
    editProfileName.value = originalName;
    editProfileAbout.value = originalAbout;
    //handleInitialCards0();
    new FormValidator(config,formSelectorProfile).enableValidation();
    new FormValidator(config,formSelectorAddPlace).enableValidation();
    console.log("initt")
  };
}