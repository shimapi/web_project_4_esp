import Popup from "./Popup.js";

import { openPhotoPopUp } from "./constants.js";

export class PopupWithImage extends Popup {

  constructor(openPhotoPopUp) {
    super(openPhotoPopUp);
    this.setEventListeners();
  }

  open(e) {
    super.open();
    const imgPopup =
      document.querySelector(".photo-popup__image");
    const titlePopup =
      document.querySelector(".photo-popup__title");
    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    titlePopup.textContent = e.target.alt;
  }
  setEventListeners(){
    super.setEventListeners();
  }


}

export const popupWithImage = new PopupWithImage(openPhotoPopUp);