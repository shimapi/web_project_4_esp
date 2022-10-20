const openEditButton = document.querySelector(".button__edit");
const openAddButton = document.querySelector(".button__add");
const closeModalButtons = document.querySelectorAll(".button__close");

const originalName = 'Jacques Cousteau';
const originalAbout = 'Explorer';

function infoInicial(){
  document.querySelector(".main-text__name").textContent = originalName;
  document.querySelector(".main-text__about").textContent = originalAbout;
  document.querySelector(".edit-profile__name").value = originalName;
  document.querySelector(".edit-profile__about").value = originalAbout;
}

function createCard(){}

function closePopUp(){}

function openPopUp(){}

function validateForm(){}

function showImageInPopup(){}


infoInicial();