//presentar una lista de elementos en una pagina
//no tiene marcado
//recibe el marcado a traves de callback y lo inserta en el contenedor

export default class Section{
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer; // renderer es una función    
    this._container = document.querySelector(containerSelector);
  }

  // renderiza todos los elementos en la pagina.
  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item); // llama a renderer() y pásale item
    });
  }
  
  // toma un elemento del DOM y lo agrega al contenedor
  addItem(element){ 
    this._container.append(element)
  };
}
