let openEdit = document.querySelector(".button__edit");
let saveInfo = document.querySelector(".button__save")
let originalName = 'Jacques Cousteau';
let originalAbout = 'Explorer';
let modal = document.querySelector(".edit-profile");
let buttonCloseX = document.querySelector(".button__close");
let formElement = document.querySelector('.edit-profile__form');

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}
function handleEditOwner(){
  modal.style.display = "block";
  let newName = document.querySelector(".edit-profile__name").value;
  let newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}
function handleProfileFormSubmit(event) {
  event.preventDefault();
  let newName = document.querySelector(".edit-profile__name").value;
  let newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".main-text__name").textContent = newName;
  document.querySelector(".main-text__about").textContent = newAbout;
}
function handleCloseModalOut(){
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
function handleCloseModal(){
  modal.style.display = "none";
}

openEdit.addEventListener('click', handleEditOwner);
formElement.addEventListener('submit', handleProfileFormSubmit);
modal.addEventListener('click', handleCloseModalOut); 
formElement.addEventListener('submit', handleCloseModal); 
buttonCloseX.addEventListener('click', handleCloseModal);

infoInicial();