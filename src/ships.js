
const DestroyerShip = () => {
   let destroyerLength = [0,0]
   let destroyerHealth = 2;
   let destroyerSunk = false;

   function damageTaken (x){
    //mark a position on a destroyerLength.

    if(x === 1){
        destroyerLength[0] = 'hit';
        console.log(destroyerLength[0]);
        return destroyerLength[0];
    }
    if(x === 2){
        destroyerLength[1] =  'hit';
        console.log("second");
        return destroyerLength[1];
    }

   }

    function checkHealth(){
        for(let i = 0; i < destroyerLength.length; i++){
            let hitScored = 0;
            if(destroyerLength[i] === 'hit'){
                hitScored++
                if(hitScored === 2){
                    return 'sunk';
                }
            }
        }
    }
    return {destroyerLength, destroyerHealth, destroyerSunk, damageTaken, checkHealth}
}

function youSunkMyShip(ship){
    console.log("You sunk my ship!");
}

let PlayerTwoDestroyer = DestroyerShip();

module.exports = PlayerTwoDestroyer;