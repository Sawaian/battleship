
const DestroyerShip = () => {
   const destroyerLength = [0,0]
   let destroyerHealth = 2;
   let destroyerSunk = false;

   function damageTaken (x){
    destroyerHealth -= x;
    if(destroyerHealth <= 0){
        youSunkMyShip();
    }
    return destroyerHealth;
   }

//    function add (x,y) {
//        return (x + y);
//    }

    return {destroyerLength, destroyerHealth, destroyerSunk, damageTaken}
}

function youSunkMyShip(ship){
    console.log("You sunk my ship!");
}

let PlayerTwoDestroyer = DestroyerShip();

module.exports = PlayerTwoDestroyer;