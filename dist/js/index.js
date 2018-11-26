"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var hud = {
    brains: getEl('nbBrain'),
    brainsPerSec: getEl('brainPerSec'),
    nbZombies: getEl('zombieCount'),
    bigBigBrain: getEl('big-big-brain'),
    zombieCase: getEl('zombie'),
    zombiePrice: getEl('price')
};
var GAME = new game_1.Game(hud);
GAME.initGame();
GAME.addEventsListener(hud);
function getEl(id) {
    return document.getElementById(id);
}
