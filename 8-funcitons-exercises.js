// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
const suma = (a, b) => a + b
console.log(suma(3,5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorNum(arrayNumber){
    let mayor = -Infinity
    for (let valor of arrayNumber) {
        if (valor > mayor) {
            mayor = valor
        }
    }
    return mayor
}
let arrayNumber = [-5, -33, -11]
console.log(mayorNum(arrayNumber))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function numVocales(frase) {
    let vocales = ["a", "e", "i", "o", "u"]
    let sumaVocales = 0
    let fraseNueva = frase.toLowerCase()
    for (let vocal of fraseNueva) {
        if (vocales.includes(vocal)) {
            sumaVocales += 1
        }
    }
    return sumaVocales
}

console.log(numVocales("Frase de prueba"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const arrayMayus = function(frase2) {
    fraseMayus = [...frase2]
    for (let i = 0; i < frase2.length; i++) {
        fraseMayus[i] = fraseMayus[i].toUpperCase()
    }
    return fraseMayus
}

console.log(arrayMayus(["frase", "de", "prueba"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numPrimo(numero) {
    if (numero < 2){
        return false
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0){
                return false
            }
        }
        return true
    }
}
console.log(numPrimo(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    let array3 = []
    for (let valores1 of array1) {
        for (let valores2 of array2) {
            if (valores1 === valores2) {
                array3.push(valores1)
            }
        }
    }
    return array3
}

console.log(elementosComunes([1, 2, 3],[5, 2, 3]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumPares = function(arrayNumbres) {
    let suma = 0
    for (let number of arrayNumbres) {
        if (number % 2 === 0) {
            suma += number
        }
    }
    return suma
}
console.log(sumPares([2, 3, 4, 5, 6, 7, 8]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numeroPotencia(arrayNumbers) {
    let newArray = []
    for (let i of arrayNumbers) {
        newArray.push(i**2)
    }
    return newArray
}
console.log(numeroPotencia([2, 3, 4, 5, 6]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirCadena(cadena) {
    return cadena.split(' ').reverse().join(' ')
}

console.log(invertirCadena("Hola mi mundo"))

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero) {
    let resultado = 1
    if (numero === 0 || numero ===1){
        resultado = 1
    } else if (numero < 0) {
        return "Ingresar un número positivo"
    } else {
        while (numero > 1){
        resultado *= numero
        numero--
    }
    }
    return resultado
}

console.log(factorial(5))