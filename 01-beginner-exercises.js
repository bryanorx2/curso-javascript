// 1. Escribe un comentario en una línea

//Este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas
/* Este es
un comentario
de varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let cadena = "Hola mundo"
let numero = 42
let booleano = true
let nulo = null
let indefinido = undefined
let simbolo = Symbol("mi simbolo")
let bigInt = 9007199254740991n

// 4. Imprime por consola el valor de todas las variables
console.log(cadena)
console.log(numero) 
console.log(booleano)
console.log(nulo)
console.log(indefinido)
console.log(simbolo)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof cadena)
console.log(typeof numero)
console.log(typeof booleano)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof simbolo)
console.log(typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = "Adiós mundo"
numero = 100
booleano = false
nulo = null
indefinido = undefined
simbolo = Symbol("mi simbolo 2")
bigInt = 9007199254740992n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
cadena = 123
numero = 9007199254740993n
booleano = null
nulo = true
indefinido = Symbol("indefinido")
simbolo = 3
bigInt = "Cuarenta y dos"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cadenaConstante = "Hey, Hola mundo"
const numeroConstante = 45
const booleanoConstante = false
const nuloConstante = null
const indefinidoConstante = undefined
const simboloConstante = Symbol("El simbolo")
const bigIntConstante = 90071992547404712n

// 9. A continuación, modifica los valores de las constantes
//cadenaConstante = "Adiós mundo2" // Esto producirá un error
//numeroConstante = 100 // Esto producirá un error
//booleanoConstante = true // Esto producirá un error
//nuloConstante = null // Esto producirá un error
// indefinidoConstante = undefined // Esto producirá un error
// simboloConstante = Symbol("mi simbolo 2") // Esto producirá un error
// bigIntConstante = 9007199254740992n // Esto producirá un error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse