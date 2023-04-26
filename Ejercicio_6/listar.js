/*2) En un archivo llamado "listar.js", importar el array que se encuentra en dataBase.js y 
crear una función reciba por parámetro una categoría liste los productos de esa categoría.*/

const data = require("./dataBase")

const filtro = (categoria) => data.filter(items => items.categoria == categoria)

// console.log(filtro("Snacks")); //test success 1

module.exports = filtro
