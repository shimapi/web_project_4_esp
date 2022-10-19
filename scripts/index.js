const openEdit = document.querySelector(".button__edit");
const openAdd = document.querySelector(".button__add");
const openPhoto = document.querySelector(".card__image");
const saveInfo = document.querySelector(".button__save")
const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';
const modal = document.querySelector(".modal");
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
function handleCloseModal(event){
  const buttonX = event.target;
  const modal = buttonX.closest(".modal");
  modal.style.display = "none";
  modalContainer.style.display = "none";
}

function handleOpenPhoto(event){
  const modalPhoto = event.target.closest(".card__image");
  console.log(modalPhoto);
}

openEdit.addEventListener('click', handleEditOwner);
openAdd.addEventListener('click', handleAddPlace);
openPhoto.addEventListener('click', handleOpenPhoto);
formElement.addEventListener('submit', handleProfileFormSubmit);
formElement.addEventListener('submit', handleCloseModal); 
modalContainer.addEventListener('click', handleCloseModalOut); 

buttonsCloseX.forEach((button)=>{	
  button.addEventListener('click', handleCloseModal)	
})

infoInicial();