/* Cómo utilizar Closure para construir una alcancía

Si creamos una alcancía de la siguiente manera, solamente mostrará el valor enviado,
 no guardará la información del dinero que le enviamos. */

// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

/* Si utilizamos un closure, entonces la variable en que estará en un scope más elevado que la función interior, 
recordará el ámbito léxico que fue creada. Por lo tanto, cada vez que invoquemos cada función, mostrará el dinero
 ahorrado en la alcancía.
*/

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
  const myMoneyBox = moneyBox();//yo ahorro
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);
  
  const moneyBoxAna = moneyBox();//ana ahorra
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);