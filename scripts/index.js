const openEdit = document.querySelector(".button__edit");
const openAdd = document.querySelector(".button__add");
const saveInfo = document.querySelector(".button__save")
const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");
const editProfile = document.querySelector(".edit-profile");
const addPlace = document.querySelector(".add-place");
const buttonCloseX = document.querySelector(".button__close");
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

function handleAddPlace(){
  addPlace.style.display = "block";
  const newName = document.querySelector(".add-place__name").value;
  const newLink = document.querySelector(".add-place__link").value;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  const newName = document.querySelector(".edit-profile__name").value;
  const newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}
function handleCloseModalOut(){
  window.onclick = function(event) {
    if (event.target == modal) {
      modalContainer.style.display = "none";
      modal.style.display = "none";
    }
  }
}
function handleCloseModal(){
  modalContainer.style.display = "none";
  modal.style.display = "none";
}

openEdit.addEventListener('click', handleEditOwner);
openAdd.addEventListener('click', handleAddPlace);
formElement.addEventListener('submit', handleProfileFormSubmit);
modalContainer.addEventListener('click', handleCloseModalOut); 
formElement.addEventListener('submit', handleCloseModal); 
buttonCloseX.addEventListener('click', handleCloseModal);

infoInicial();