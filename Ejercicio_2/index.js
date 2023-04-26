//Punto 1

const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

if (numeroRandom % 2 > 0){
    console.log("El numero " + numeroRandom + " es impar")
} else {
    console.log("El numero " + numeroRandom + " es par")
}

//Punto 2

let lista = ["tren","edificio"]

if(lista[0].lenght > lista[1].lenght){
    console.log("La palabra " + lista[0] + " es más larga que la palabra" + lista[1])
} else {
    console.log("La palabra " + lista[1] + " es más larga que la palabra " + lista[0])
}

//Punto 3

let num = 9

for(i=0; i<10; i++){
    let multiplicacion = num * i
    console.log(i," x 9 = ",multiplicacion)
}

//Punto 4

function multiplicar(x){
    let resultado = x * 23
    return resultado
}

let resultadoFinal= multiplicar(9)
console.log(resultadoFinal)

//Punto 5

let arrayRandom = []

for(i=0; i < 100; i++){
    arrayRandom.push(Math.floor((Math.random() * (100 - 1 + 1)) + 1));
}

console.log(arrayRandom)
