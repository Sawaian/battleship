
class Ship {
    constructor(health){
    this.health = health;
    this.length = Array(health);
    this.sunk = false;
    }



    takenDamage(ship, damage){
        let hullDamage =  ship.health- damage;
        if(hullDamage === 0){
            return ship.sunk = true;
        }
            return hullDamage 
    }

    //     shipLength(health){
    //     let shipCount = health;
    //     for(let i = 0; i < this.length.length; i--){
    //          shipCount++
    //     }
    //     return shipCount
    // }
}

let PlayerOneDestroyer = new Ship(2);



// const DestroyerShip = () => {
//    let destroyerLength = [0,0]
//    let destroyerHealth = 2;
//    let destroyerSunk = false;

//    let cruiserLength = ['hit', 'hit', 'hit']

//    function hit(x){
//     //mark a position on a destroyerLength.

//     if(x === 1){
//         destroyerLength[0] = 'hit';
//         console.log(destroyerLength[0]);
//         return destroyerLength[0];
//     }
//     if(x === 2){
//         destroyerLength[1] =  'hit';
//         console.log("second");
//         return destroyerLength[1];
//     }
//    }

//     function checkHealth(ship){
//         let hitScored = 0;
//         let sunk = false;
      
//         for(let i = 0; i < ship.length; i++){
//             if(ship[i] === 'hit'){
//                 hitScored++
//                 if(hitScored === ship.length){
//                     return sunk = true;
//                 }
//             }
//             else{ return sunk = false}
//         }
//     }
//     return {destroyerLength, destroyerHealth, destroyerSunk, hit, checkHealth,cruiserLength}
// }

// function youSunkMyShip(ship){
//     console.log("You sunk my ship!");
// }

// let PlayerTwoDestroyer = DestroyerShip();

module.exports = PlayerOneDestroyer