function contador ( i ) {
    let acumulador = i
    function aumentar () {
      console.log(acumulador);
      acumulador = acumulador + 1
    }
    return aumentar
  };
  
  const closure = contador(1)
  closure() // 1
  closure() // 2
  closure() // 3
  
  const closure2 = contador(10);
  closure2() // 10
  closure2() // 11
  
  closure() // 4

  /* Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior.
   En JavaScript, las clausuras se crean cada vez que una función es creada. 
   
   Los closures permiten acceder al ámbito de una función exterior desde una función interior. En javascript, los closures se crean cada vez que una función es creada.

Los closures no son siempre utilizados.

Un closure es cuando una función accede a una variable fuera de su contexto.

Al trabajar con closures entra en juego el concepto de alcance de las variables.

Ámbito léxico
El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.
   */