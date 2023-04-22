const verdura1 = "Zanahoria" // global scope 

function frutas() 
{
    let animal1 = "conejo" //function scope
    if (true) {
        var fruta1 = "Cereza"; // function scope
        let fruta2 = "Manzana"; // block scope
        const fruta3 = "Platano"; // block scope

        console.log(fruta2);
console.log(fruta3);
    }

    console.log(animal1);
console.log(fruta1);


}
console.log(verdura1);
frutas();


 /* Las variable verdura1 pueden ser usadas en cualquier lugar del código pues es una global scope 

Las variable animal1 pueden ser usadas y llamadas SOLO dentro de la función pues es una function scope

Las variables fruta2 y fruta3 pueden ser usadas y llamadas SOLO en el bloque if pues son block scope,
 el unico que escapa de esto son las variables var que siguen siendo function scope*/ 
