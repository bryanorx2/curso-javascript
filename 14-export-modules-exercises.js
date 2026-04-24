// 1. Exporta una función
export function sum(a, b) {
    return a + b
}

// 2. Exporta una constante
export const months = 12

// 3. Exporta una clase
export class MyClass{
    constructor(name) {
        this.name = name
    }

}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default {
    funcion: function (name){return `Hola ${name}`},
    miconstante: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    miclase: class MyClass2{
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
    },
}