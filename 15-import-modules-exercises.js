import operation, { months, MyClass, sum } from "./14-export-modules-exercises.js";
import { hours, multiplication, MyClass3 } from "./export-modules/16-export-modules-exercises.js";
// 4. Importa una función

console.log(sum(5, 10))

// 5. Importa una constante
console.log(months)

// 6. Importa una clase
let newClass = new MyClass("Bryan")
console.log(newClass.name)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
let newClass2 = new operation.miclase("Bryan", 30)
console.log(operation.funcion("Bryan"))
console.log(operation.miconstante)
console.log(newClass2.name)
console.log(newClass2.age)

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
let newClass3 = new MyClass3()
console.log(multiplication(5, 2))
console.log(hours)
console.log(newClass3.greet())
