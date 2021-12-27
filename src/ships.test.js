
const PlayerOneDestroyer = require('./ships.js')


// test(' ship hit! ', () =>{
//     expect(PlayerOneDestroyer.takenDamage(PlayerOneDestroyer, 1)).toBe(1);
// }) 

test( ' Ship Sunk ', () =>{
    expect(PlayerOneDestroyer.takenDamage(PlayerOneDestroyer, 2)).toBe(true);
})

test( 'ship length', () => {
    expect(PlayerOneDestroyer.shipLength(3)).toBe(0);
})
