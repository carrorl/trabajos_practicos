const { itemID, itemValue } = require("./busqueda");
const listar = require("./listar")



switch (process.argv[2]) {
  case "buscarPorID" : {
    console.log(itemID(process.argv[3]))
    break;
  }
  case "BuscarPorPrecio" : {
    console.log(itemValue(process.argv[3]));
    break;
  }
  case "BuscarCategoria" : {
    console.log(listar(process.argv[3]));
    break;
  }
  default: {
    "Ingrese un valor válido"
  }
}

