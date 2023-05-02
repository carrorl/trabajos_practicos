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

// /*
// 3 - El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: `peso / altura^2`

// Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

// - "Bajo de peso" si el BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// */

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

// /*
// 4 - Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento
// en una línea a parte:
// */

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

// /*
// 5 - Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el
// formato de K para miles y M para millones.

// Por ejemplo:

// - 1400 se convierte en 1K
// - 34,567 se convierte en 34K
// - 7’456,345 se convierte en 7M.
// */

// function likes(n) {
//   let likeCount = 0;

//   if (n > 1000 && n < 1000000) {
//     likeCount = Math.floor(n / 1000);
//   } else if (n >= 1000000) {
//     likeCount = Math.floor(n / 1000000);
//   } else {
//     likeCount = n;
//   }
//   return `${likeCount}M`;
// }

// // código de prueba
// console.log(likes(983)); // "983"
// console.log(likes(1900)); // "1K"
// console.log(likes(54000)); // "54K"
// console.log(likes(120800)); // "120K"
// console.log(likes(25222444)); // "25M"

// /*
// 6 - Escribir una función llamada `fizzBuzz` que reciba un número y
// retorne un string de acuerdo a lo siguiente:

// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
// */

// function fizzBuzz(multiplo) {
//   if (multiplo % 3 === 0 && multiplo % 5 === 0) {
//     return "fizzbuzz";
//   } else if (multiplo % 3 === 0) {
//     return "fizz";
//   } else if (multiplo % 5 === 0) {
//     return "buzz";
//   } else {
//     return multiplo}
// }

// // código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// /*
// Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos
// números que hay entre ellos (excluyéndolos):

// **Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor
// que el segundo.
// */

// function contarRango (firstN, secondN) {
//   const rango = secondN - firstN - 1
//   return rango
// }

// // código de prueba
// console.log(contarRango(1, 9)); // 7
// console.log(contarRango(1332, 8743)); // 7410
// console.log(contarRango(5, 6)); // 0

// /*
// 8 - Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y
// número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// **Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.
// */

// function sumarRango(nInicial, nFinal) {
//   let sumaRango = 0;

//   if (nFinal === nInicial) {
//     return 0;
//   } else {
//     for (i = nInicial; i <= nFinal; i++) {
//       sumaRango += i;
//     }
//   }
//   return sumaRango;
// }

// // código de prueba
// console.log(sumarRango(0, 10)); // 55
// console.log(sumarRango(12, 14)); // 39
// console.log(sumarRango(5, 5)); // 0

/*
9 - Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces 
que aparece la letra "a":
*/

// function numeroDeAes(palabra) {
//   let cuentaDeAes = 0

//   for (i = 0; i < palabra.length; i++) {
//     if(palabra[i] === 'a'){
//       cuentaDeAes++
//     }
//   }

//   return cuentaDeAes
// }

// // código de prueba
// console.log(numeroDeAes("abracadabra")); // 5
// console.log(numeroDeAes("etinol")); // 0
// console.log(numeroDeAes("")); // 0

// /*
// 10 - Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter
// (un string de un caracter). La función debe retornar el número de veces que aparece el
// caracter en el string.
// */

// function numeroDeCaracteres(strLong, strChar) {

//   let countCharOnStr = 0;

//   for (i = 0; i < strLong.length; i++) {
//     if (strLong[i] === strChar) {
//       countCharOnStr++;
//     }
//   }
//   return countCharOnStr;
// }

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
// console.log(numeroDeCaracteres("MMMMM", "m")); // 0
// console.log(numeroDeCaracteres("eeee", "e")); // 4

// /*
// 11 - Escribir una función llamada `sumarArreglo` que reciba un arreglo de números y retorne la suma
// de todos los elementos.
// */

// function sumarArreglo(arrNum) {
//   return arrNum.reduce((acc, curr) => acc + curr, 0);
// }

// // código de prueba
// console.log(sumarArreglo([3, 1, 2])); // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
// console.log(sumarArreglo([])); // 0

// /*
// 12 - Escribir una función llamada `multiplicarArreglo` que reciba un arreglo de números y
// retorne la multiplicación de todos los elementos.
// */

// function multiplicarArreglo(arrMul) {

//   let multArr = 1

//   for (i = 0; i < arrMul.length; i++){
//     multArr = arrMul[i] * multArr
//   }
//   return multArr
// }

// console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
// console.log(multiplicarArreglo([])); // 1

/*Escribir una función llamada `removerCeros` que reciba un arreglo de números y retorne un nuevo 
arreglo excluyendo los ceros (0).
*/

function removerCeros(zeroArr) {
  return zeroArr.filter((xArr) => xArr > 0);
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []
