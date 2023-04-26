// /*
// 1 Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true`
// si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`.
// */

// function contrasenaValida(password) {
//   return password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9"
//     ? true
//     : false;
// }

// // código de prueba
// console.log(contrasenaValida("2Fj(jjbFsuj")); // true
// console.log(contrasenaValida("eoZiugBf&g9")); // true
// console.log(contrasenaValida("hola")); // false
// console.log(contrasenaValuda("")); // false

// /*
// 2 - Escribir una función llamada `calcularImpuestos` que reciba dos argumentos numéricos:
// `edad` e `ingresos`. Si `edad` es igual o mayor a 18 y los ingresos son iguales o mayores
// a 1000 debe retornar `ingresos` \* 40%. De lo contrario retornar 0.
// */

// function calcularImpuestos(edad, ingresos) {
//   return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
// }

// // código de prueba
// console.log(calcularImpuestos(18, 1000)); // 400
// console.log(calcularImpuestos(40, 10000)); // 4000
// console.log(calcularImpuestos(17, 5000)); // 0
// console.log(calcularImpuestos(30, 500)); // 0

/*
3 - El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: `peso / altura^2`

Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

- "Bajo de peso" si el BMI < 18.5
- "Normal" si está entre 18.5 y 24.9
- "Sobrepeso" si está entre 25 y 29.9
- "Obeso" si es igual o mayor a 30
*/

// function bmi(peso, altura){
//   let indice = peso / (altura**2)

//   if (indice >= 30) {
//     return 'Obeso'
//   } else if (indice >= 25) {
//     return 'Sobrepeso'
//   } else if (indice >= 18.5) {
//     return 'Normal'
//   } else if (indice < 18.5){
//     return 'Bajo de peso'
//   }
// }

// // código de prueba
// console.log(bmi(65, 1.8)); // "Normal"
// console.log(bmi(72, 1.6)); // "Sobrepeso"
// console.log(bmi(52, 1.75)); //  "Bajo de peso"
// console.log(bmi(135, 1.7)); // "Obeso"

/*
4 - Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento 
en una línea a parte:
*/

// function imprimirArreglo(a, b, c, d) {
//   const array = []
//   array.push(a)
//   array.push(b)
//   array.push(c)
//   array.push(d)
//   return array.join("\n")
// }

// // código de prueba
// console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));
// // 1
// // Hola
// // 2
// // Mundo

/*
5 - Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el 
formato de K para miles y M para millones.

Por ejemplo:

- 1400 se convierte en 1K
- 34,567 se convierte en 34K
- 7’456,345 se convierte en 7M.
*/

function likes (n) {
  
  let likeCount = 0

  if(n > 1000 && n < 1000000) {
    likeCount = Math.floor(n/1000)
  } else if (n >= 1000000 ) {
    likeCount = Math.floor(n/1000000)
  } else {
    likeCount = n
  }
  return `${likeCount}M`
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"


