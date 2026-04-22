// 1. Crea un función que utilice error correctamente
function validateAge(age) {
    if (age < 0) {
        console.error(`❌ Error: La edad no puede ser negativa. Edad: ${age}`)
    } else {
        console.log(`La edad es: ${age}`)
    }
}
validateAge(-5)

// 2. Crea una función que utilice warn correctamente
function validateStock(stock) {
    if (stock < 5) {
        console.warn(`⚠️ Advertencia: Stock bajo, queda solo ${stock} unidades`)
    } else {
        console.log(`Hay suficientes unidades`)
    }
}
validateStock(3)

// 3. Crea una función que utilice info correctamente
function showInfoUser(user, age) {
    console.info(`ℹ️ Usuario: ${user}, edad: ${age}`)
}
showInfoUser("Bryan", 30)

// 4. Utiliza table
let productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 25},
    {nombre: "Teclado", precio: 80},
]
console.table(productos)

// 5. Utiliza group
function showOrder(){
    console.group("📦 Detalles del Pedido:")
    console.log("Producto: Laptop")
    console.log("Cantidad: 2")
    console.log("Precio: 2400")
    console.groupEnd()
}
showOrder()

// 6. Utiliza time
function measureTimeProcess(){
    console.time("Proceso:")
    for (let i = 0; i < 10000; i++) {
        let x = i*2
    }
    console.timeEnd("Proceso:")
}
measureTimeProcess()

// 7. Valida con assert si un número es positivo
function validatePositiveAge(age) {
    console.assert(age > 0, "La edad debe ser positiva")
}
validatePositiveAge(10)
validatePositiveAge(-5)

// 8. Utiliza count
function countClicks(){
    console.count("Clicks")
}
countClicks()
countClicks()
countClicks()

// 9. Utiliza trace
function functA() {
    functB()
}
function functB() {
    functC()
}
function functC() {
    console.trace("Seguimiento de la ejecución")
}
functA()

// 10. Utiliza clear
function functClear() {
    console.log("Se va a borrar el console")
    console.clear()
}
functClear()