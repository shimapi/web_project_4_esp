let openEdit = document.querySelector(".owner__info_edit");
let saveInfo = document.querySelector(".edit-profile__save")
let originalName = 'Jacques Cousteau';
let originalAbout = 'Explorer';
let modal = document.querySelector(".edit-profile");
let buttonCloseX = document.querySelector(".edit-profile__button-close");
let formElement = document.querySelector('.edit-profile__form');

function infoInicial(){
  document.querySelector(".owner__info_name").textContent = originalName;
  document.querySelector(".owner__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}
function handleEditOwner(){
  modal.style.display = "block";
  let newName = document.querySelector(".edit-profile__name").value;
  let newAbout = document.querySelector(".edit-profile__about").value;
  document.querySelector(".owner__info_name").textContent = newName;
  document.querySelector(".owner__about").textContent = newAbout;
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
function handleCloseModal(){
  modal.style.display = "none";
}

openEdit.addEventListener('click', handleEditOwner); //abre modal
formElement.addEventListener('submit', handleProfileFormSubmit);
modal.addEventListener('click', handleCloseModalOut); 
formElement.addEventListener('submit', handleCloseModal); 
buttonCloseX.addEventListener('click', handleCloseModal);

infoInicial();