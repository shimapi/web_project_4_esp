const openEditButton = document.querySelector(".button__edit");
const openAddButton = document.querySelector(".button__add");
const closeModalButtons = document.querySelectorAll(".button__close");
const modals = document.querySelectorAll(".modal");

const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';

const openEditProfilePopUp = document.querySelector(".edit-profile");

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}

//en esta funcion estan apareciendo los tres modales: editar perfil, añadir foto y photo popup
function handleCloseModal(event){
  modals.forEach((modal) => {
    modal.classList.remove("modal__active");
    modal.classList.add("modal__inactive");
    console.log(modal)
  })
}

function handleOpenPopup(){
  openEditProfilePopUp.classList.remove("modal__inactive");
  openEditProfilePopUp.classList.add("modal__active");

  console.log(openEditProfilePopUp)
}



function handleEditProfilePopUp(){
  handleOpenPopup()
  //editProfile.addEventListener("click",handleCloseModalOut)
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}

openEditButton.addEventListener('click', handleEditProfilePopUp);

closeModalButtons.forEach((button) => {
  button.addEventListener("click",handleCloseModal);
})

infoInicial();