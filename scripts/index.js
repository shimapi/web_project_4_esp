 //@import openEdit from "./editOwner.js";


let openEdit = document.querySelector(".owner__info_edit");
let saveInfo = document.querySelector(".edit-profile__save")
let originalName = 'Jacques Cousteau';
let originalAbout = 'Explorer';
let modal = document.querySelector(".edit-profile");
let buttonCloseX = document.querySelector(".edit-profile__button-close");
let formElement = document.querySelector('.edit-profile__form');

function infoInicial(){
  document.querySelector(".owner__info_name").innerHTML = originalName;
  document.querySelector(".owner__about").innerHTML = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}
function handleEditOwner(){
  modal.style.display = "block";
  let newName = document.querySelector(".edit-profile__name").value;
  let newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".owner__info_name").innerHTML = newName;
  document.querySelector(".owner__about").innerHTML = newAbout;
}
function handleProfileFormSubmit(event) {
  event.preventDefault();
  let newName = document.querySelector(".edit-profile__name").value;
  let newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".owner__info_name").textContent = newName;
  document.querySelector(".owner__about").textContent = newAbout;
}
function handleCloseModalOut(){
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
function handleCloseModalSubmit(){
  modal.style.display = "none";
}
function handleCloseModalX(){
  modal.style.display = "none";
}

openEdit.addEventListener('click', handleEditOwner); //abre modal
formElement.addEventListener('submit', handleProfileFormSubmit);
modal.addEventListener('click', handleCloseModalOut); 
formElement.addEventListener('submit', handleCloseModalSubmit); 
buttonCloseX.addEventListener('click', handleCloseModalX);

infoInicial();