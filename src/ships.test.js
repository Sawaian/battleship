// const PlayerTwoDestroyer = require('./ships.js')
const PlayerOneDestroyer = require('./ships.js')

// test(' destroyer ', () => {
//     expect(PlayerTwoDestroyer.hit(1)).toBe('hit');
// });

// test(' destroyer ', () => {
//     expect(PlayerTwoDestroyer.hit(2)).toBe('hit');
// });

// test(' cruiser ', ()=> {
//     expect(PlayerTwoDestroyer.checkHealth(PlayerTwoDestroyer.destroyerLength)).toBe(true);
// })

test(' ship hit! ', () =>{
    expect(PlayerOneDestroyer.takenDamage(PlayerOneDestroyer, 1)).toBe(1);
}) 

test( ' Ship Sunk ', () =>{
    expect(PlayerOneDestroyer.takenDamage(PlayerOneDestroyer, 2)).toBe(true);
})

// test(' destroyer ', () => {n
//     expect(PlayerTwoDestroyer.add(2,2)).toBe(4);
// });
