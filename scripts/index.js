const openEdit = document.querySelector(".button__edit");
const openAdd = document.querySelector(".button__add");
const saveInfo = document.querySelector(".button__save")
const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';
const modal = document.querySelector(".modal");
const modalsClose = document.querySelectorAll(".modal"); //array
const modalContainer = document.querySelector(".modal__container");
const editProfile = document.querySelector(".edit-profile");
const addPlace = document.querySelector(".add-place");
const buttonsCloseX = document.querySelectorAll(".button__close"); //Array!
const formElement = document.querySelector('.edit-profile__form');

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}
function handleEditOwner(){
  editProfile.style.display = "block";
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}



function handleAddPlace(event) {
  event.preventDefault();
  addPlace.style.display = "block";
  const newPhoto = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;
  document.querySelector(".add-place__name").textContent = newPhoto;
  document.querySelector(".add-place__link").textContent = newLink;
  //return createCard(newPhoto,newLink)
}

function handleCloseModalOut(){
  window.onclick = function(event) {
    if (event.target == modal) {
      modalContainer.style.display = "none";
      modal.style.display = "none";
    }
  }
}
function handleCloseModal(event){
  const buttonX = event.target;
  const modal = buttonX.closest(".modal");
  modal.style.display = "none";
  modalContainer.style.display = "none";
}



openEdit.addEventListener('click', handleEditOwner);
formElement.addEventListener('submit', handleProfileFormSubmit);
formElement.addEventListener('submit', handleCloseModal); 
modalContainer.addEventListener('click', handleCloseModalOut); 

buttonsCloseX.forEach((button)=>{	
  button.addEventListener('click', handleCloseModal);
})

modalsClose.forEach((modal)=>{	
  modal.addEventListener('click', handleCloseModal);
})

openAdd.addEventListener('click', handleAddPlace);
addPlace.addEventListener('submit', handleAddPlace);


infoInicial();