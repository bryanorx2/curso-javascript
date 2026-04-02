// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let numero = 1; numero <= 20; numero++) {
    console.log(numero)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let numero = 1
let suma = 0
while (numero <= 100) {
    suma = suma + numero
    numero++
}
console.log(`La suma de los números del 1 al 100 es ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
numero = 1
do {
    if (numero % 2 === 0) {
        console.log(numero)
    }
    numero++
} while (numero <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Bryan", "Orlando", "Gisela", "Milagros", "Roberto", "Carlos", "Piero" ,"Renatto"]
for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = new Set (["a", "e", "i", "o", "u"])
let cadena = "Hola mi nombre es Bryan"
let newCadena
newCadena = cadena.toLowerCase()
let sumaVocal = 0


for (let i = 0; i < newCadena.length; i++) {
    if (vocales.has(newCadena[i])){
            sumaVocal += 1
        }
}
console.log(`La frase "${cadena}" tiene ${sumaVocal} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numberArray = [1, 3, 5, 3, 1]
let producto = 1
for (let i = 0; i<numberArray.length; i++){
    producto *= numberArray[i]
}
console.log(`El producto de ${numberArray} es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = 1
while (tabla <= 12){
    console.log(`5 x ${tabla} = ${5*tabla}`)
    tabla++ 
}

// 8. Usa un bucle para invertir una cadena de texto
cadena = "Hola mi nombres es Bryan"
let cadenaInvertida = ""
for (let i = cadena.length-1; i >= 0; i--){

    cadenaInvertida += cadena[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let ordenFibonacci = 10
let num1 = 0
let num2 = 1
for (let i = 0; i < ordenFibonacci; i++) {
    console.log(num1)
    let temp = num1
    num1 = num2
    num2 = temp + num2
}
console.log(`La suma de los ${ordenFibonacci} primeros números Fibonacci es = ${num1}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNumber = [5, 7, 9, 11, 13]
let newArrayNumber = []
for (let i = 0; i < arrayNumber.length; i++){
    if (arrayNumber[i] > 10){
        newArrayNumber.push(arrayNumber[i])
    }
}
console.log(newArrayNumber)