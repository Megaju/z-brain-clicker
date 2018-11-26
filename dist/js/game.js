"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(HUD) {
        this.HUD = HUD;
        this.hud = HUD;
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
        var _this = this;
        elements.bigBigBrain.addEventListener('click', function () {
            _this.addBrain();
        });
        elements.zombieCase.addEventListener('click', function () {
            _this.buyZombie();
        });
    };
    Game.prototype.addBrain = function () {
        var _this = this;
        this.brains += this.player.power;
        this.hud.brains.innerHTML = "" + this.brains;
        this.hud.bigBigBrain.style.transform = 'scale(1.2)';
        setTimeout(function () {
            _this.hud.bigBigBrain.style.transform = 'scale(1.0)';
        }, 100);
    };
    Game.prototype.buyZombie = function () {
        if (this.brains - this.zombies.price >= 0) {
            this.brains -= this.zombies.price;
            this.zombies.quantity++;
            this.zombies.price *= 1.5;
            this.hud.zombiePrice.innerHTML = "Cost: " + this.zombies.price + " Brains";
            this.hud.brains.innerHTML = "" + this.brains;
            this.hud.nbZombies.innerHTML = "" + this.zombies.quantity;
        }
    };
    return Game;
}());
exports.Game = Game;
