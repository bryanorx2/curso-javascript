// OPERADORES
// 1. Declara dos variables numéricas y muestra por consola su suma, resta, multiplicación y módulo
let num1 = 15;
let num2 = 4;

console.log("Suma:", num1 + num2); 
console.log("Resta:", num1 - num2); 
console.log("Multiplicación:", num1 * num2); 
console.log("Módulo:", num1 % num2);

// 2. Declara una variable con valor 10 e incrementa su valor en 5 usando un operador de asignación (sin reasignarla con =)
let num3 = 10;
num3 +=5;
console.log(num3)

// 3. Comprueba si un número es mayor que 50 Y menor que 100 al mismo tiempo
let num4 = 51;
console.log(num4>50 && num4<100)

// STRINGS
// 4. Declara una variable con tu nombre completo y muestra cuántos caracteres tiene
let nombreCompleto = "Bryan Orbegoso";
console.log(nombreCompleto.length)

// 5. Declara una variable con la frase "javascript es genial" y transfórmala a mayúsculas
let frase = "javascript es genial";
console.log(frase.toUpperCase())

// 6. Dada la frase "Me gusta programar en Python", reemplaza "Python" por "JavaScript"
let frase2 = "Me gusta programar en Python";
console.log(frase2.replace("Python", "JavaScript"))

// 7. Dada la frase "  Hola Mundo  ", elimina los espacios al inicio y al final
let frase3 = " Hola Mundo "
console.log(frase3.trim())

// CONDICIONALES
// 8. Declara una variable con tu edad. Si eres mayor de 18 imprime "Mayor de edad", si no "Menor de edad"
let edad = 30;
console.log(edad>18 ? "Mayor de edad" : "Menor de edad")

// 9. Declara una variable con una nota del 0 al 10. Usa if/else if/else para imprimir:
//    - "Excelente" si es mayor o igual a 9
//    - "Aprobado" si es mayor o igual a 6
//    - "Reprobado" si es menor a 6
let nota = 7
if (nota >= 9){
    console.log("Excelente")
} else if (nota >= 6){
    console.log("Aprobado")
} else{
    console.log("Reprobado")
}


// 10. Usa un switch para imprimir el tipo de día según un número del 1 al 7
//     (1 = Lunes ... 7 = Domingo), agrupando los fines de semana en un mismo caso
let dia = 6;
let nombreDia;
switch (dia){
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break
    default:
        nombreDia = "Sábado o Domingo";
}
console.log(nombreDia)

// ARRAY
// 11. Crea un array con 5 números. Muestra el primero y el último elemento sin usar índices negativos
let miArray = [1, 2, 3, 4, 5]
let primerElemento = miArray[0]
let segundoElemento = miArray[miArray.length-1]
console.log(primerElemento)
console.log(segundoElemento)

// 12. Dado el array ["Juan", "María", "Carlos", "Ana"], comprueba si "Carlos" existe en él
let arrayNames = ["Juan", "María", "Carlos", "Ana"]
console.log(arrayNames.includes("Carlos"))

// SET
// 13. Dado el array [1, 2, 2, 3, 4, 4, 5], conviértelo a un Set y muestra cuántos elementos únicos tiene
let arrayNumbers = [1, 2, 2, 3, 4, 4, 5]
let miSet = new Set(arrayNumbers)
console.log(miSet.size)

// MAP
// 14. Crea un mapa que asocie tres países a sus capitales. Comprueba si un país existe e imprime su capital
let miMap = new Map ([
    ["Perú", "Lima"],
    ["Uruguay", "Montevideo"],
    ["España", "Madrid"]
])
console.log(miMap.has("Uruguay"))
console.log(miMap.get("Uruguay"))

// 15. Itera el mapa del ejercicio 14 e imprime cada par "País: Capital" usando un bucle

for (let [clave, valor] of miMap){
    console.log(`${clave}: ${valor}`)
}