// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3
let resta = 10 - 4
let multiplicacion = 6 * 7
let division = 20 / 5
let modulo = 10 % 3
let exponente = 2 ** 3
let incremento = 10
incremento++
let decremento = 10
decremento--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacion = 5
asignacion += suma
asignacion -= resta
asignacion *= multiplicacion
asignacion /= division
asignacion %= modulo
asignacion **= exponente

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let numero1 = 10
let numero2 = 5

console.log(numero1 > numero2)
console.log(numero1 >= 10)
console.log(numero1 != numero2)
console.log(numero2 < numero1)
console.log(numero1 !== "10")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(numero2 != "5")
console.log(numero2 > numero1)
console.log(numero1 + numero2 > 20)
console.log(numero1%numero2 === "0")
console.log(numero2 == 1)

// 5. Utiliza el operador lógico and
console.log(numero1+numero2 == 15 && numero1 - numero2 ==5)
console.log(numero1+numero2 > 20 && numero1*numero2==50)
console.log(numero1 == 5*2 && numero2 == 100/10)

// 6. Utiliza el operador lógico or
console.log(numero1+numero2 >= 15 || numero1+numero2 == 5)
console.log(numero1/numero2 == 3 || numero2/numero1 == 0.5 || numero1<numero2)
console.log(numero1%numero2 == 1 || numero2*3 == numero1)

// 7. Combina ambos operadores lógicos
console.log(numero1*numero2 == 50 && numero1/numero2 == 2 || numero1+5 == 25 || numero2**2 == 26)
console.log(numero2 > 5 || numero1 === 10 && numero2 <= numero1 && numero2*2 === numero1-1)
console.log(numero1%numero2 == 0 && numero1/numero2 == 2 || numero1+5 == 25 || numero2**2 == 26)

// 8. Añade alguna negación
console.log(!(numero1 === 10))
console.log(!(numero2 > 5 || numero1 === 10 && numero2 <= numero1 && numero2*2 === numero1-1))
console.log(!(numero1%numero2 == 0 && numero1/numero2 == 2 || numero1+5 == 25 || numero2**2 == 26))

// 9. Utiliza el operador ternario
let edad = 17
console.log(edad>=18 ? "Eres mayor de edad" : "Eres menor de edad")

// 10. Combina operadores aritméticos, de comparáción y lógicas
let nota1 = 10
let nota2 = 11
let nota3 = 12
let promedio = 0
promedio = (nota1+nota2+nota3)/3

console.log(promedio>=11 ? "Estás aprobado" : "Estás desaprobado")
console.log(!(nota1<nota2 && nota2<nota3))
console.log(nota3 == "12" || nota2*2 == 23 || nota1*2 == 19 && nota1%3>=1)
