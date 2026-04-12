// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let animals = ["león","tigre","leopardo","pantera"]
let [myAnimal1, myAnimal2] = animals

console.log(myAnimal1)
console.log(myAnimal2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let numbers = [1, 2, 3, 4]
let [myNumber1, , ,myNumber4, myNumber5 = 0] = numbers

console.log(myNumber1)
console.log(myNumber4)
console.log(myNumber5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name:"Bryan",
    age: 30,
    weight: 78,
}
let {name, age} = person
console.log(name)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: nombre, age: edad} = person
console.log(nombre)
console.log(edad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
person.studies = {
    type: "Universitario",
    career: "Ingenieria de Sistemas",
    period: "2013-2018",
}
let {studies:{type, career}} = person
console.log(type)
console.log(career)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let nombres = ["Bryan", "Orlando", "Roberto", "Milagros"]
let edades = [30, 27, 29, 28]
let propa = [...nombres, ...edades]
console.log(propa)

// 7. Usa propagación para crear una copia de un array
let newNombres = [...nombres]
console.log(newNombres)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let polo = {
    color: "Azul",
    talla: "S",
    cantidad: 10,
}
let electrodoméstico = {
    tipo: "Refri",
    precio: 1000,
    marca: "LG",
}
let nuevoObjeto = {...polo,...electrodoméstico}
console.log(nuevoObjeto)

// 9. Usa propagación para crear una copia de un objeto
let newPolo = {...polo}
console.log(newPolo)

// 10. Combina desestructuración y propagación
let frutas = ["manzana", "pera", "uva", "sandia"]
let paises = ["Perú", "Colombia", "Brasil", "México"]

let [combina1, combina2, combina3, combina4, combina5, combina6, combina7, combina8] = [...frutas, ...paises]

console.log(combina1)
console.log(combina2)
console.log(combina7)
console.log(combina8)