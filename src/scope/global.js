// variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Colombia'; // global
  console.log(country);
}

countries();
console.log(country);




/*¿Que es el SCOPE?
Se puede definir como el alcance que tienen nuestras variables dentro del documento.
Es importante tener en cuenta que los OBJETOS y las FUNCIONES tambien son variables, por lo tanto son afectadas por el SCOPE.
Para entender a la perfeccion como afecta el SCOPE debemos tener en cuenta el “funcionamiento de las variables” que se pueden “DECLARAR - ASIGNAR - DECLARAR y ASIGNAR - REDECLARAR - REASIGNAR”

Tenemos distintos TIPOS de Scope : Global - Function - Block.

Global Scope - Se define cuando una variable esta declarada de forma global, osea “Fuera de una funcion o un bloque”.
No es buena practica declarar de forma global ya que podemos declarar dos variables con el mismo nombre y diferente valor.

Nota: si no declaramos una variable y solo la inicializamos  country = 'Colombia';  se convierte en golbal
*/