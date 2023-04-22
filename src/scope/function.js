function greeting() {
    let userName = 'Ana'; 
    console.log(userName);
  
    if (userName === 'Ana') {
      console.log(`Hello ${userName}!`)
    }
  
  }
  
  greeting();
  console.log(userName);//esto es function scope que las variables declaradas dentro de una funcion se limita a usar solamente dentro de la funcion

  /* El scope local de función (function scope) es el entorno donde las variables locales solo se pueden acceder desde una función del programa.

En este scope no importa que las variables sean declaradas con var, let o const. Sin embargo, ten presente que se puede redeclarar una variable con var, pero no con let y const.

Ejemplo utilizando scope de función
Observa el siguiente código y piensa cuál será el resultado.

-------------Ejemplo-----------------------
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
-------------------------------------

Primeramente, al invocarse la función saludo imprimirá "Andres" por consola, pero inmediatamente después existirá un error de referencia.

---------------------Ejemplo---------------------
function saludo() {
    let nombre = "Andres"
    console.log(nombre)
}

saludo() // "Andres"
console.log(nombre) // ReferenceError: nombre is not defined
------------------------------------------------
Esto sucede porque la variable nombre tiene un scope de función, por lo que solo se puede acceder dentro de la misma.

Según la cadena de scope, si existe una función dentro de otra función, la función hijo podrá acceder a las variables de la función padre, pero no en viceversa. Recuerda esto en el tema de los Closures.
*/