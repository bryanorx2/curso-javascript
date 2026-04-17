// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático

class Country {

    constructor(name, continent) {
        this.name = name
        this.continent = continent
    }

    ubicacion() {
        console.log(`${this.name} está en el continente de ${this.continent}`)
    }

    static info() {
        console.log("Esta clase representa un país con su nombre y continente")
    }
}
let myCountry = new Country("Peru", "América")
console.log(myCountry)

myCountry.ubicacion()
Country.info()


// 6. Crea una clase que haga uso de herencia
// 10. Sobrescribe un método de una clase que utilice herencia

class DetailsCountry extends Country{

    constructor(name, continent, capital, population) {
        super(name, continent)
        this.capital = capital
        this.population = population
    }

    ubicacion() {
        super.ubicacion()
        console.log(`La capital de ${this.name} es ${this.capital} y su población es de ${this.population} habitantes.`)
    }
}
let myCountry2 = new DetailsCountry("Colombia", "America", "Bogotá", 52000000)
myCountry2.ubicacion()
console.log(myCountry2)

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores

class Product{

    #price

    constructor(name, price) {
        this.name = name
        this.#price = price

    }
    
    get priceWithTax () {
        return this.#price*1.18
    }

    set priceBase (newPrice) {
        if (typeof newPrice !== "number" || newPrice < 0) {
            console.error("Precio no válido")
            return
        }
        this.#price = newPrice/1.18
    }
    get priceBase () {
        return this.#price
    }
}

let myProduct = new Product("Casaca",100)
console.log(myProduct)
console.log(myProduct.priceWithTax)

// Usando el SET: asignamos un precio que YA tiene impuesto (ej. 118)
myProduct.priceBase = 118

// Comprobamos que el SET calculó la base correctamente (debería ser 100)
console.log("Nuevo precio base calculado:", myProduct.priceBase)

// Y el GET de impuestos debería seguir funcionando sobre ese nuevo valor
console.log("Precio con impuesto:", myProduct.priceWithTax)