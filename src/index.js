// index.js

import "./styles/index.css"; // agrega la importación del archivo principal de hojas de estilo
//import stepsSrc from "./images/steps.png";

const numbers = [2, 3, 5];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

//const stepsImage = document.getElementById("image-steps");
//stepsImage.src = stepsSrc;