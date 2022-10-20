const openEditProfileButton = document.querySelector(".button__edit");
const openAddPlaceButton = document.querySelector(".button__add");

const closeModalButtons = document.querySelectorAll(".button__close");
const modals = document.querySelectorAll(".modal");

const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';

const openEditProfilePopUp = document.querySelector(".edit-profile");
const openAddPlacePopUp = document.querySelector(".add-place");
const openPhotoPopUp = document.querySelector(".photo-popup");

const buttons = document.querySelectorAll("[data-target]");

buttons.forEach((btn)=>{
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("modal__inactive");
    document.querySelector(btn.dataset.target).classList.add("modal__active");
    console.log(btn)
  })
})



function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}

/*function handleOpenPopup(){
  openEditProfilePopUp.classList.remove("modal__inactive");
  openEditProfilePopUp.classList.add("modal__active");
  //console.log(openEditProfilePopUp) -> funciona :D
}

function handleOpenPopup(event){
  modals.forEach((modal) => {
    
    modal.addEventListener("click", (e)=>{
      console.log(e.target.classList.contains("edit-profile__container"))
      console.log(e.target)

    })
    modal.classList.remove("modal__inactive");
    modal.classList.add("modal__active");
    console.log(modal) //OK. -> 3 popups
  })
}*/

//en esta funcion estan apareciendo los tres modales: editar perfil, añadir foto y photo popup -> debería mejorarse.
function handleCloseModal(event){
  modals.forEach((modal) => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal__inactive");
    //console.log(modal) OK. -> 3 popups
  })
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  //handleOpenPopup();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}


function handleAddPlace() {
  //handleOpenPopup()
  const newPhoto = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;
  console.log(newPhoto);
  console.log(newLink);
}



openEditProfileButton.addEventListener('click', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleProfileFormSubmit);
openEditProfilePopUp.addEventListener('submit', handleCloseModal); 

openAddPlaceButton.addEventListener('click', handleAddPlace);
openAddPlaceButton.addEventListener('submit', handleAddPlace);
openAddPlaceButton.addEventListener('submit', handleCloseModal); 

closeModalButtons.forEach((button) => {
  button.addEventListener("click",handleCloseModal);
})

infoInicial();