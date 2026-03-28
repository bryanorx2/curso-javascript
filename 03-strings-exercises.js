// 1. Concatena dos cadenas de texto
let nombre = "Bryan"
let apellido = "Orbegoso"
console.log("Mi nombre completo es: " +  nombre + " " + apellido)

// 2. Muestra la longitud de una cadena de texto
let frase = "Al mal tiempo, buena cara"
console.log(frase.length)

// 3. Muestra el primer y último carácter de un string
let nombreCompleto = "Bryan Orlando Orbegoso Pezo"
console.log(nombreCompleto[0])
console.log(nombreCompleto[nombreCompleto.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
let textoMayus = "ESTE TEXTO ESTA EN MINÚSCULA"
let textoMinus = "este texto esta en MAYÚSCULA"

console.log(textoMayus.toLowerCase())
console.log(textoMinus.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Esta cadena
de texto
tiene varias
lineas`)

// 6. Interpola el valor de una variable en un string
let usuario = "bryanorx"
let curso = "JavaScript"

console.log(`Bienvenido ${usuario} al curso de ${curso}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let refran = "Más vale prevenir que lamentar"
console.log(refran)
console.log(refran.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let frase2 = "Tres tristes tigres comen trigo en un trigal"
console.log(frase2.includes("tigre"))

// 9. Comprueba si dos strings son iguales
let texto1 = "Este es el primer texto "
let texto2 = "Este es el primer texto"
console.log(texto1 === texto2 ? "Son strings iguales" : "No son strings iguales" )

// 10. Comprueba si dos strings tienen la misma longitud
let cadena1 = "Sean todos bienvenidos"
let cadena2 = "Sean todos bienvenidos "
console.log(cadena1.length === cadena2.length ? "Los strings tiene la misma longitud" : "Los strings no tienen la misma longitud")