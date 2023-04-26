/*1) En un archivo llamado "busqueda.js", importar el array que se encuentra en dataBase.js y 
crear una función que acepte como parámetro un id numérico y devuelva el producto correspondiente.*/

const data = require("./dataBase")

const itemID = (id) => data.find(item => item.id == id)
const itemValue = (value) => data.filter(item => item.precio < value)


// console.log(itemID(11)) //Test success 1
// console.log(itemID(5)) //Test success 2

// console.log(itemValue(300)) //Test succes 3

module.exports = { itemID, itemValue }