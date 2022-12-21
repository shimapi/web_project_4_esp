import Popup from "./Popup.js";

export class PopupWithImage extends Popup{
  
  constructor(openPhotoPopUp) {
    super(openPhotoPopUp);
    this.setEventListeners()
  }

  open(e){
    console.log("se abrió el POPUP WITH IMAGE")
    const imgPopup = 
      document.querySelector(".photo-popup__image");
    const titlePopup = 
      document.querySelector(".photo-popup__title");
    
    //src = img
    //alt = titulo
    //alt leyenda de imagen
    imgPopup.src = e.target.src;
    imgPopup.alt = e.target.alt;
    titlePopup.textContent = e.target.alt;
  }
  setEventListeners(){
    const openingPhotoPopUp = new Popup(openPhotoPopUp).open();
    return openingPhotoPopUp;
    
  }
 
}
