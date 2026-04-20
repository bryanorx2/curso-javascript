// 1. Captura una excepción utilizando try-catch
let myArray = null
try {
    console.log(myArray.length)
} catch (error) {
    console.log("Error capturado: ", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log(JSON.parse("{invalid}"))
} catch (error) {
    console.log("Error:", error.message)
} finally {
    console.log("Este bloque siempre se ejecuta")
}

// 3. Lanza una excepción genérica
function checkAge(age) {
    if (age < 0){
        throw new Error("La edad no puede ser negativa");
    }
    console.log(`La edad es ${age}`)
}

try {
    checkAge(-10)
} catch (error){
    console.log("Error: ", error.message)
}

// 4. Crea una excepción personalizada
class InvalidEmailError extends Error {
    constructor(message, email) {
        super(message)
        this.email = email
    }

    showEmail() {
        console.log(`Email ingresado: ${this.email}`)
    }
}


function validateEmail(email) {
    if (!email.includes("@")) {
        throw new InvalidEmailError(`El email no es válido`, email)
    }
    console.log(`Email válido`)
}


// 5. Lanza una excepción personalizada
try {
    validateEmail("bryan12.com")
} catch (error){
    console.log("Se ha producido un error personalizado:", error.message)
    error.showEmail()
}

// 6. Lanza varias excepciones según una lógica definida
class CardError extends Error {
    constructor(message,valorCard){
        super(message)
        this.valorCard = valorCard
    }

    showStateCard() {
        console.log(`Estado de la tarjeta ${this.valorCard}`)
    }
}

function processPayment(money,stateCard) {
    if (typeof money !== "number"){
        throw new TypeError("El monto no es un número") 
    } if (money <= 0) {
        throw new RangeError("El monto es menor o igual a 0")
    } if (stateCard === "INVALID_CARD") {
        throw new CardError("La tarjeta no es válida", stateCard)
    }
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    //processPayment("-100","CARD")
    processPayment(-100,"Card")
    //processPayment(100,"INVALID_CARD")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de Tipo:", error.message)
    } else if (error instanceof RangeError) {
        console.log("Error de Rango:", error.message)
    } else if (error instanceof CardError){
    console.log("Error Personalizado: ", error.message)
    error.showStateCard()
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function convertToFloat(values){
    for (let value of values) {
        try {
            let newValue = parseFloat(value)
            if (!Number.isNaN(newValue)) {
            console.log(`✓ ${value} convertido a ${newValue}`)
            } else {
            throw new Error(`${value} no se puede convertir`)
            }
        } catch (error) {
        console.log("✗ Error:", error.message)
    }
    }
}

convertToFloat(["3.14", "texto", "5.5", null, "10", undefined])

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyNotFoundError extends Error {
    constructor(message) {
        super(message)
    }
}
let user = {
    name: "Bryan",
    age: 30, 
}

function checkProperty(obj, value) {
        if (!(value in obj)) {
            throw new PropertyNotFoundError(`La propiedad "${value}" no existe en el objeto`)
        }
        console.log("Propiedad encontrada")
}

try {
    checkProperty(user, "email")
} catch (error){
    console.log("PropertyNotFoundError:",error.message)
    console.log("Propiedades disponibles",Object.keys(user))
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function unestableOperation() {
    for (let i = 1; i <= 10; i++) {
        try {
            console.log(`Intento ${i}`)
            let random = Math.random()
            if (random < 0.8) {
                throw new Error("Falló")
            }
            console.log("Éxito")
            return
        } catch (error) {
            if (i === 10) {
                throw new Error("Se alcanzó el número máximo de intentos")
            }
        }
    }
}
try {
    unestableOperation()
} catch (error) {
    console.log("Error:", error.message)
}