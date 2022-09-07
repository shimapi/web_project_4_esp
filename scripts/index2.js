let openEdit = document.querySelector(".owner__info_edit");
let saveInfo = document.querySelector(".editProfile__save")
let originalName = 'Jacques Cousteau';
let originalAbout = 'Explorer';

function infoInicial(){
  document.querySelector(".owner__info_name").innerHTML = originalName;
  document.querySelector(".owner__about").innerHTML = originalAbout;

  document.querySelector(".editProfile__name").value = originalName;
  document.querySelector(".editProfile__about").value = originalAbout;
}


function editOwner(){
  modal.style.display = "block";
  console.log('haz hecho click en editar');

  let newName = document.querySelector(".editProfile__name").value;
  let newAbout = document.querySelector(".editProfile__about").value;
  console.log(newName);
  console.log(newAbout);

  document.querySelector(".owner__info_name").innerHTML = newName;
  document.querySelector(".owner__about").innerHTML = newAbout;
}

function editInfo(){
  document.querySelector(".owner__info_name").innerHTML = newName;
  document.querySelector(".owner__about").innerHTML = newAbout;
}










// Get the modal
var modal = document.querySelector(".editProfile");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Busquemos el formulario en el DOM
let formElement = document.querySelector('.editProfile__form');

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
   // let nameInput = // Use querySelector()
   // let jobInput = // Use querySelector()

    let newName = document.querySelector(".editProfile__name").value;
    let newAbout = document.querySelector(".editProfile__about").value;

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente

    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
    document.querySelector(".owner__info_name").textContent = newName;
    document.querySelector(".owner__about").textContent = newAbout;
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit); 





infoInicial();

openEdit.addEventListener('click', editOwner); //abre modal

//saveInfo.addEventListener('click', editInfo); //guarda info modal