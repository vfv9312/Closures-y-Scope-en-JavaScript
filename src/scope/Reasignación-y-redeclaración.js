// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre2; // declaración (undefined) ✅
nombre2 = "Andres" // asignación ✅
nombre2 = "Valeria" // reasignación ✅
//let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌ // no podemos redeclarar y reasignar a los let

// Con const 
//const nombre ;// SyntaxError: Missing initializer in const declaration. ❌ La const deve inicialiarse desde que la declaramos
const nombre1 = "Andres" // declaración y asignación ✅
//nombre = "Valeria" // TypeError: Assignment to constant variable. ❌ No podemos reasginar valor al const
//const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌ no podemos redeclarar y reasignar a los const


const array = ["manzana", "pera"] // declaración y asignación ✅
array[0] = "piña" // Cambio de valor en un elemento del array  o usar push o pop nos permitiria editarlo los const en los arreglos
console.log(array) // [ 'piña', 'pera' ]
//const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ❌