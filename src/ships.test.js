const PlayerTwoDestroyer = require('./ships.js')

test(' destroyer ', () => {
    expect(PlayerTwoDestroyer.damageTaken(2)).toBe(0);
});


// test(' destroyer ', () => {
//     expect(PlayerTwoDestroyer.add(2,2)).toBe(4);
// });
