(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./game":1}]},{},[2]);
