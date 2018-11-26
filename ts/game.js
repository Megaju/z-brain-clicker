"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.initGame = function () {
        this.brains = 0;
        this.player = {
            power: 1,
            intelligence: 1
        };
        this.zombies = {
            quantity: 0,
            price: 25
        };
        this.virus = {
            level: 1,
            progression: 0
        };
        this.study = {
            level: 1,
            progression: 0
        };
        this.training = {
            level: 1,
            progression: 0
        };
    };
    Game.prototype.addEventsListener = function (elements) {
    };
    Game.prototype.addBrain = function () {
        this.brains += this.player.power;
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map