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

function bmi(peso, altura){
  let indice = peso / (altura**altura)

  if (indice >= 30) {
    return 'Obeso'
  } else if (indice >= 25) {
    return 'Sobrepeso'
  } else if (indice >= 18.5) {
    return 'Normal'
  } else if (indice < 18.5){
    return 'Bajo de peso'
  }
}

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"