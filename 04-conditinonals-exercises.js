// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Bryan"
if (miNombre == "Bryan"){
    console.log(miNombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "bryanorx"
let contraseña = 123
if (usuario == "bryanorx" && contraseña ==123){
    console.log("Credenciales correctas")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -9
if (numero > 0){
    console.log("El número es positivo")
}else if (numero < 0 ){
    console.log("El número es negativo")
}else{
    console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 11
let diferencia
if (edad >= 18){
    console.log("Puede votar")
}else{
    diferencia = 18 - edad
    console.log(`Le faltan ${diferencia} año(s)`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age = 10
console.log(age>=18 ? "Es adulto" : "Es menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "agosto"
if (mes == "enero" || mes == "febrero" ||  mes == "marzo"){
    console.log(`El mes ${mes} corresponde a verano`)
} else if (mes == "abril" ||  mes == "mayo" ||  mes == "junio"){
    console.log(`El mes ${mes} corresponde a otoño`)
} else if (mes == "julio" ||  mes == "agosto" ||  mes == "setiembre"){
    console.log(`El mes ${mes} corresponde a invierno`)
} else if (mes == "octubre" ||  mes == "noviembre" ||  mes == "diciembre"){
    console.log(`El mes ${mes} corresponde a primavera`)}
else {
    console.log(`El mes ${mes} no es un mes válido`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre"){
    console.log(`El mes ${mes} tiene 31 días`)
}else if (mes == "abril" || mes == "junio" || mes == "setiembre" || mes == "noviembre"){
    console.log(`El mes ${mes} tiene 30 días`)
} else if (mes == "febrero"){
    console.log(`El mes ${mes} tiene 28 o 29 días`)
} else {
    console.log(`El mes ${mes} no es un mes válido`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "italiano"
let saludo
switch (idioma){
    case "español":
        saludo = "Hola"
        break
    case "ingles":
        saludo = "Hello"
        break
    case "italiano":
        saludo = "Ciao"
        break
    case "portuges":
        saludo ="Ola"
        break
    case "frances":
        saludo = "Bonjour"
        break
    default:
        saludo = "No tenemos registro de ese idioma"
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let estacion
switch (mes){
    case "enero":
        estacion = "corresponde a verano"
        break
    case "febrero":
        estacion = "corresponde a verano"
        break
    case "marzo":
        estacion = "corresponde a verano"
        break
    case "abril":
        estacion = "corresponde a otoño"
        break
    case "mayo":
        estacion = "corresponde a otoño"
        break
    case "junio":
        estacion = "corresponde a otoño"
        break
    case "julio":
        estacion = "corresponde a invierno"
        break
    case "agosto":
        estacion = "corresponde a invierno"
        break
    case "setiembre":
        estacion = "corresponde a invierno"
        break
    case "octubre":
        estacion = "corresponde a primavera"
        break
    case "noviembre":
        estacion = "corresponde a primavera"
        break
    case "diciembre":
        estacion = "corresponde a primavera"
        break
    default:
        estacion = "no es un mes válido"
}
console.log(`El mes ${mes} ${estacion}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mensajeDias
switch (mes) {
    case "enero":
        mensajeDias = "tiene 31 dias"
        break
    case "febrero":
        mensajeDias = "tiene 28 o 29 dias"
        break
    case "marzo":
        mensajeDias = "tiene 31 dias"
        break
    case "abril":
        mensajeDias = "tiene 30 dias"
        break
    case "mayo":
        mensajeDias = "tiene 31 dias"
        break
    case "junio":
        mensajeDias = "tiene 30 dias"
        break
    case "julio":
        mensajeDias = "tiene 31 dias"
        break
    case "agosto":
        mensajeDias = "tiene 31 dias"
        break
    case "setiembre":
        mensajeDias = "tiene 30 dias"
        break
    case "octubre":
        mensajeDias = "tiene 31 dias"
        break
    case "noviembre":
        mensajeDias = ""
        break
    case "diciembre":
        mensajeDias = "tiene 31 dias"
        break
    default:
        mensajeDias = "no es un mes válido"
        break;
}
console.log(`El mes ${mes} ${mensajeDias}`)