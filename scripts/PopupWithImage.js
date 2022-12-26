import Popup from "./Popup.js";

import { openPhotoPopUp } from "./constants.js";

export class PopupWithImage extends Popup {

  constructor(openPhotoPopUp) {
    super(openPhotoPopUp);
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


}

export const popupWithImage = new PopupWithImage(openPhotoPopUp);