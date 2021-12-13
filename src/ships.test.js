const PlayerTwoDestroyer = require('./ships.js')

test(' destroyer ', () => {
    expect(PlayerTwoDestroyer.hit(1)).toBe('hit');
});

test(' destroyer ', () => {
    expect(PlayerTwoDestroyer.hit(2)).toBe('hit');
});

test(' cruiser ', ()=> {
    expect(PlayerTwoDestroyer.checkHealth(PlayerTwoDestroyer.destroyerHealth)).toBe(false);
})

// test(' destroyer ', () => {n
//     expect(PlayerTwoDestroyer.add(2,2)).toBe(4);
// });
