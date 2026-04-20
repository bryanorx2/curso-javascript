// 1. Crea un objeto con 3 propiedades
let  polo = {
    color: "negro",
    talla: "S",
    cantidad: 10,
}
console.log(polo)

// 2. Accede y muestra su valor
console.log(polo.color)

// 3. Agrega una nueva propiedad
polo.tela = "Algodón"
console.log(polo)

// 4. Elimina una de las 3 primeras propiedades
delete polo.cantidad
console.log(polo)

// 5. Agrega una función e invócala
polo.cuidado = function () {
    console.log("Lavado al seco")
}
polo.cuidado()

// 6. Itera las propiedades del objeto
for (let propiedad in polo){
    console.log(polo[propiedad])
}

// 7. Crea un objeto anidado
polo.adicional = {
    marca:"Adidas",
    distribuidor: "Tienda Pepito",
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(polo.adicional.distribuidor)

// 9. Comprueba si los dos objetos creados son iguales
let  polo2 = {
    color: "negro",
    talla: "S",
    cantidad: 10,
}
console.log(polo === polo2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(polo.color === polo2.talla)
