"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var hud = {
    brains: getEl('nbBrain'),
    brainsPerSec: getEl('brainPerSec'),
    nbZombies: getEl('zombieCount')
};
console.log('Test');
console.log('Test');
var GAME = new game_1.Game();
GAME.initGame();
function getEl(id) {
    return document.getElementById(id);
}
//# sourceMappingURL=index.js.map