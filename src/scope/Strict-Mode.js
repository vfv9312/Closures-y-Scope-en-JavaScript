/*El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

Este en el código colocando en la primera línea "use strict" para todo el archivo. También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.

Ejemplo usando el modo estricto
Si realizas el siguiente código que contiene una asignación sin una declaración, no va a ocurrir un error y el programa se va a ejecutar con normalidad.*/ 

"use strict";

let nombre = "Andres";
console.log(nombre); // "Andres"



nombre2 = "Andy";
console.log(nombre2); // ReferenceError: nombre is not defined