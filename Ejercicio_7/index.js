/*
1 Escribir una función llamada `contrasenaValida` que reciba un string y retorne `true`
si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar `false`.
*/

function contrasenaValida(password) {
  return password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9"
    ? true
    : false;
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")); // true
console.log(contrasenaValida("eoZiugBf&g9")); // true
console.log(contrasenaValida("hola")); // false
console.log(contrasenaValuda("")); // false

/*
2 - Escribir una función llamada `calcularImpuestos` que reciba dos argumentos numéricos:
`edad` e `ingresos`. Si `edad` es igual o mayor a 18 y los ingresos son iguales o mayores
a 1000 debe retornar `ingresos` \* 40%. De lo contrario retornar 0.
*/

function calcularImpuestos(edad, ingresos) {
  return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
}

// código de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0

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
  let indice = peso / (altura**2)

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

/*
4 - Escribir una función llamada `imprimirArreglo` que reciba un arreglo e imprima cada elemento
en una línea a parte:
*/

function imprimirArreglo(a, b, c, d) {
  const array = []
  array.push(a)
  array.push(b)
  array.push(c)
  array.push(d)
  return array.join("\n")
}

// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"));
// 1
// Hola
// 2
// Mundo

/*
5 - Escribe una función llamada `likes` que reciba un número y retorne un string utilizando el
formato de K para miles y M para millones.

Por ejemplo:

- 1400 se convierte en 1K
- 34,567 se convierte en 34K
- 7’456,345 se convierte en 7M.
*/

function likes(n) {
  let likeCount = 0;

  if (n > 1000 && n < 1000000) {
    likeCount = Math.floor(n / 1000);
  } else if (n >= 1000000) {
    likeCount = Math.floor(n / 1000000);
  } else {
    likeCount = n;
  }
  return `${likeCount}M`;
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

/*
6 - Escribir una función llamada `fizzBuzz` que reciba un número y
retorne un string de acuerdo a lo siguiente:

- "fizz" si el número es múltiplo de 3.
- "buzz" si el número es múltiplo de 5.
- "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
- Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
*/

function fizzBuzz(multiplo) {
  if (multiplo % 3 === 0 && multiplo % 5 === 0) {
    return "fizzbuzz";
  } else if (multiplo % 3 === 0) {
    return "fizz";
  } else if (multiplo % 5 === 0) {
    return "buzz";
  } else {
    return multiplo}
}

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

/*
Escribir una función llamada `contarRango` que reciba dos números y retorne cuántos
números que hay entre ellos (excluyéndolos):

**Nota:** Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor
que el segundo.
*/

function contarRango (firstN, secondN) {
  const rango = secondN - firstN - 1
  return rango
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

/*
8 - Escribir una función llamada `sumarRango` que reciba dos argumentos: número inicial y
número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

**Nota:** puedes asumir que el número inicial va a ser menor o igual que el número final.
*/

function sumarRango(nInicial, nFinal) {
  let sumaRango = 0;

  if (nFinal === nInicial) {
    return 0;
  } else {
    for (i = nInicial; i <= nFinal; i++) {
      sumaRango += i;
    }
  }
  return sumaRango;
}

// código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

/*
9 - Escribir una función llamada `numeroDeAes` que reciba un string y retorne el número de veces 
que aparece la letra "a":
*/

function numeroDeAes(palabra) {
  let cuentaDeAes = 0

  for (i = 0; i < palabra.length; i++) {
    if(palabra[i] === 'a'){
      cuentaDeAes++
    }
  }

  return cuentaDeAes
}

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0

/*
10 - Escribir una función llamada `numeroDeCaracteres` que reciba un string y un caracter
(un string de un caracter). La función debe retornar el número de veces que aparece el
caracter en el string.
*/

function numeroDeCaracteres(strLong, strChar) {

  let countCharOnStr = 0;

  for (i = 0; i < strLong.length; i++) {
    if (strLong[i] === strChar) {
      countCharOnStr++;
    }
  }
  return countCharOnStr;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4

/*
11 - Escribir una función llamada `sumarArreglo` que reciba un arreglo de números y retorne la suma
de todos los elementos.
*/

function sumarArreglo(arrNum) {
  return arrNum.reduce((acc, curr) => acc + curr, 0);
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])); // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumarArreglo([])); // 0

/*
12 - Escribir una función llamada `multiplicarArreglo` que reciba un arreglo de números y
retorne la multiplicación de todos los elementos.
*/

function multiplicarArreglo(arrMul) {

  let multArr = 1

  for (i = 0; i < arrMul.length; i++){
    multArr = arrMul[i] * multArr
  }
  return multArr
}

console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1

/*Escribir una función llamada `removerCeros` que reciba un arreglo de números y retorne un nuevo
arreglo excluyendo los ceros (0).
*/

function removerCeros(zeroArr) {
  return zeroArr.filter((xArr) => xArr > 0);
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []

/*
14 - Escribir una función llamada `sumarArreglo` que reciba tres argumentos: un arreglo de números,
la posición inicial y la posición final. La función debe retornar la suma de todos los números
dentro del rango (la posición inicial y la posición final, incluyéndolas).

**Nota:** puedes asumir que la posición inicial va a ser menor o igual a la posición final, y
que están dentro de los límites del arreglo.
*/

function sumarArreglo(arrNum, initPos, finalPos) {
  let result = 0;

  for (i = initPos; i <= finalPos; i++) {
    result += arrNum[i];
  }

  return result;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0

/*
15 - Escribir una función llamada `transcribir` que reciba un string (una cadena de ADN) y retorne otro string
(su complemento ARN).

Los complementos son los siguientes:

- G -> C
- C -> G
- T -> A
- A -> U
*/

function transcribir(ADNchain) {
  let ARN = [""];
  for (i = 0; i < ADNchain.length; i++) {
    if (ADNchain[i] == "G") {
      ARN.push("C");
    } else if (ADNchain[i] == "C") {
      ARN.push("G");
    } else if (ADNchain[i] == "T") {
      ARN.push("A");
    } else {
      ARN.push("U");
    }
  }

  return ARN.join("");
}

// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

/*
16 - Escribir una función llamada `capitalizar` que reciba un string y capitalice la primera letra:
*/

function capitalizar(toCap){
  return toCap.charAt(0).toUpperCase() + toCap.slice(1)
}

// código de prueba
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

/*
17 - Escribir una función llamada `capitalizar` que reciba un string
y capitalice la primera letra **de cada palabra**:
*/

function capitalizar(toCapAll) {
  return toCapAll
    .split(" ")
    .map(function (toCapAll) {
      return toCapAll.charAt(0).toUpperCase() + toCapAll.slice(1);
    })
    .join(" ");
}

// código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""

/*
18 - Escribir una función llamada `max` que reciba un arreglo de números y retorne el número máximo:

**Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.
*/

function max(arrMax) {
  let maxValue = arrMax[0];

  for (i = 0; i < arrMax.length; i++) {
    if (arrMax[i] > maxValue) {
      maxValue = arrMax[i];
    }
  }

  return maxValue;
}

// código de prueba
console.log(max([3, 9, 6])); // 9
console.log(max([67, 35, 54, 26])); // 67
console.log(max([5, 9, 2, 4, 5, 7])); // 9

/*
19 - Escribir una función llamada `min` que reciba un arreglo de números y retorne el número mínimo:

**Nota:** Intentarlo hacer sin el método `Math.min` de JavaScript.
*/

function min(arrMin) {
  let minValue = arrMin[0];

  for (i = 0; i < arrMin.length; i++) {
    if (arrMin[i] < minValue) {
      minValue = arrMin[i];
    }
  }

  return minValue;
}

// código de prueba
console.log(min([3, 9, 6])); // 3
console.log(min([67, 35, 54, 26])); // 26
console.log(min([5, 9, 2, 4, 5, 7])); // 2

/*
20 - Escribir una función llamada `password` que reciba un string y retorne un nuevo string realizando los siguientes cambios:

- Las mayúsculas se reemplazan por minúsculas.
- Se eliminan los espacios en blanco.
- Reemplaza el caracter “a” por “4”.
- Reemplaza el caracter “e” por “3”.
- Reemplaza el caracter “i” por “1”.
- Reemplaza el carater “o” por “0”.
*/

function password(pwd){
  let pwdjoined = pwd.split('').join('')
  let pwdCased = []
  let pwdFinal = []

    for(i = 0; i < pwdjoined.length; i++){
      if(/[A-Z]/.test(pwdjoined[i]) === true){
        pwdCased.push(pwdjoined[i].toLowerCase())
      } else {
        pwdCased.push(pwdjoined[i])
      }
    }

    for(i = 0; i < pwdCased.length; i++){
      switch(pwdCased[i]){
        case 'a': pwdFinal.push('4')
          break;
        case 'e': pwdFinal.push('3')
          break;
        case 'i': pwdFinal.push('1')
          break;
        case 'o': pwdFinal.push('0')
          break;
        default: pwdFinal.push(pwdCased[i])
      }
    }

    return pwdFinal.join('')

}

// código de prueba
console.log(password("hola")); // "h0l4"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""

/*
21 - Escribir una función llamada `pares` que reciba un arreglo de números y retorne un nuevo arreglo
con los números pares únicamente.
*/

function pares(arrNotEvens) {

  let arrEvens = [];

  for (i = 0; i < arrNotEvens.length; i++) {
    if (arrNotEvens[i] % 2 == 0) {
      arrEvens.push(arrNotEvens[i]);
    }
  }

  return arrEvens;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []

/*
22 - Escribir una función llamada `posiciones` que reciba un arreglo de números y retorne un nuevo arreglo **con las posiciones**
donde se encuentran números pares.
*/

function posiciones(arrPos) {
  let positions = [];

  for (i = 0; i < arrPos.length; i++) {
    if (arrPos[i] % 2 === 0) {
      positions.push(i);
    }
  }

  return positions;
}

console.log(posiciones([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(posiciones([])); // []

/*
23 - Escribir una función llamada `duplicar` que reciba un arreglo de números y
retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
*/

function duplicar(arrTwoTimes){
  return arrTwoTimes.map((x) => x*2)
}

console.log(duplicar([1, 2, 3])); // [2, 4, 6]
console.log(duplicar([])); // []

/*
24 - Escribir una función llamada `empiezanConA` que reciba un arreglo de strings y
retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).
*/

function empiezanConA(arrWordsA) {
  let aWords = [];

  for (i = 0; i < arrWordsA.length; i++) {
    if (/^[aA]/.test(arrWordsA[i]) === true) {
      aWords.push(arrWordsA[i]);
    }
  }

  return aWords;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])); // []
console.log(empiezanConA([])); // []

/*
25 - Escribir una función llamada `terminanConS` que reciba un arreglo de strings y retorne un nuevo arreglo con todas las 
palabras que terminan con "s" (mayúscula o minúscula).
*/

function terminanConS(arrWordsS) {
  let sWords = [];

  for (i = 0; i < arrWordsS.length; i++) {
    if (/s$/.test(arrWordsS[i])) {
      sWords.push(arrWordsS[i]);
    }
  }

  return sWords;
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])); // []
console.log(terminanConS([])); // []

/*
26 - Escribir una función llamada `imprimirMatriz`
que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.
*/

function imprimirMatriz(matriz) {
  let flatMatrix = matriz.flat();

  flatMatrix.forEach((x) => {
    console.log(x);
  });
}

// código de prueba
console.log(
  imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/*
27 - Escribir una función llamada `numerosAPalabras` que reciba un arreglo de números (cada número en el rango de 0 a 0) y
retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
*/

function numerosAPalabras(numToWords) {
  let wordsFromNumb = [];

  for (i = 0; i < numToWords.length; i++) {
    switch (numToWords[i]) {
      case 0: wordsFromNumb.push('cero')
        break;
      case 1: wordsFromNumb.push('uno')
        break;
      case 2: wordsFromNumb.push('dos')
        break;
      case 3: wordsFromNumb.push('tres')
        break;
      case 4: wordsFromNumb.push('cuatro')
        break;
      case 5: wordsFromNumb.push('cinco')
        break;
      case 6: wordsFromNumb.push('seis')
        break;
      case 7: wordsFromNumb.push('siete')
        break;
      case 8: wordsFromNumb.push('ocho')
        break;
      case 9: wordsFromNumb.push('nueve')
        break;
      default:
        `Unknown number`;
    }
  }

  return wordsFromNumb;
}

console.log(numerosAPalabras([0, 1, 2, 3, 4])); // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])); // ["cinco", "seis", "siete", "ocho", "nueve"]

/*
28 - Escribir una función llamada `palabrasANumeros` que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo
cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.
*/

function palabrasANumeros(wordsToNumb) {
  let NumbFromWords = [];

  for (i = 0; i < wordsToNumb.length; i++) {
    switch (wordsToNumb[i]) {
      case 'cero':
        NumbFromWords.push(0);
        break;
      case 'uno':
        NumbFromWords.push(1);
        break;
      case 'dos':
        NumbFromWords.push(2);
        break;
      case 'tres':
        NumbFromWords.push(3);
        break;
      case 'cuatro':
        NumbFromWords.push(4);
        break;
      case 'cinco':
        NumbFromWords.push(5);
        break;
      case 'seis':
        NumbFromWords.push(6);
        break;
      case 'siete':
        NumbFromWords.push(7);
        break;
      case 'ocho':
        NumbFromWords.push(8);
        break;
      case 'nueve':
        NumbFromWords.push(9);
        break;
      default:
        NumbFromWords.push(-1);
    }
  }

  return NumbFromWords;
}

// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]

/*
29 - Escribir una función llamada `numAsteriscos` que reciba un arreglo y retorne el número de asteriscos:
*/

function numAsteriscos(stars) {
  let starCount = 0;

  for (i = 0; i < stars.length; i++) {
    if (stars[i] === "*") {
      starCount++;
    }
  }

  return starCount;
}

// código de prueba
console.log(numAsteriscos(["", "*", "", "*"])); // 2
console.log(numAsteriscos(["*", "*", "*"])); // 3
console.log(numAsteriscos([])); // 0

/*
30 - Escribir una función llamada `numAsteriscos` 
que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
*/

function numAsteriscos(starMatrix) {
  let matrixStarCount = 0;
  let flatStars = starMatrix.flat();

  flatStars.forEach((x) => {
    if (x === "*") {
      matrixStarCount++;
    }
  });

  return matrixStarCount;
}


// código de prueba
console.log(
  numAsteriscos([
    ["*", "", "*"],
    ["", "*", ""],
    ["*", "", "*"],
  ])
);
// 5

/*
31 - Escribir una función llamada `distancia` que reciba dos strings y retorne el número de caracteres diferentes 
(comparando posición por posición).

**Nota:** Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad 
puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre las longitudes agregaría al resultado).
*/

function distancia(str1, str2){
   
  let shortestStringSize
  let distance

  if (str1.length === str2.length){
    distance = 0
    shortestStringSize = 0
  } else if (str1.length > str2.length){
    distance = str1.lenght - str2.lenght
    shortestStringSize = str2.length
  } else {
    distance = str2.length - str1.length
    shortestStringSize = str1.length 
  }

  if (shortestStringSize > 0){
    for(i = 0; i < shortestStringSize; i++){

      if(str1[i] != str2[i]){
        distance ++
      }
    }
  } else {
    for(i = 0; i < str1.length; i++){

      if(str1[i] != str2[i]){
        distance ++
      }
    }
  }
  return distance
}

// código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3