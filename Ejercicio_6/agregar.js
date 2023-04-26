/*4) En un archivo llamado "agregar.js", importar el array que se encuentra en dataBase.js y crear una 
función que me permita agregar un producto a la lista. Ingresando por parámetros, 
el id, nombre, descripcion, categoria y precio. mostrarlo en un console.log*/

const data = require("./dataBase")

function Item(id, nombre, descripcion, categoria, precio){
  this.id = id
  this.nombre = nombre
  this.descripcion = descripcion
  this.categoria = categoria
  this.precio = precio  
}

const newItem = new Item(45, "Pritty Pomelo", "Gaseosa sabor pomelo", "Bebidas", 195.7)
data.push(newItem)

console.log(data)