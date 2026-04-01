// 1. Crea un array que almacene cinco animales
let miArray = ["perro", "gato", "hamster", "loro", "tigre"]
console.log(miArray)

// 2. Añade dos más. Uno al principio y otro al final
miArray.push("león")
miArray.unshift("tortuga")

console.log(miArray)

// 3. Elimina el que se encuentra en tercera posición
miArray.splice(2, 1)
console.log(miArray)

// 4. Crea un set que almacene cinco libros
let miSet = new Set (["Don Quijote", "El Principito", "La Metamorfosis", "En agosto nos vemos", "El resplandor"])
console.log(miSet)

// 5. Añade dos más. Uno de ellos repetido

miSet.add("El señor de los anillos")
miSet.add("La ciudad y los perros")
miSet.add("El señor de los anillos")

console.log(miSet)

// 6. Elimina uno concreto a tu elección
miSet.delete("En agosto nos vemos")
console.log(miSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let miMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Setiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(miMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(miMap.has(5))
console.log(miMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
miMap.set("Verano",["Diciembre", "Enero", "Febrero", "Marzo"])
console.log(miMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let miArray2 = ["manzana", "pera", "piña", "plátano"]
let miSet2 = new Set(miArray2)
let miMap2 = new Map([
    ["elemento",miSet2]
])

console.log(miSet2)
console.log(miMap2)
