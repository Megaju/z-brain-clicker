(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(HUD) {
        this.HUD = HUD;
        this.hud = HUD;
    }
    Game.prototype.initGame = function () {
        var _this = this;
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
            progression: 0,
            nextLevel: 600
        };
        this.training = {
            level: 1,
            progression: 0
        };
        this.hud.brains.innerHTML = "" + this.brains.toFixed(2);
        this.hud.brainsPerSec.innerHTML = this.updateBrainsPerSec().toFixed(2) + " Per Sec";
        this.hud.nbZombies.innerHTML = "" + this.zombies.quantity;
        this.hud.zombiePrice.innerHTML = "Cost: " + this.zombies.price.toFixed(2) + " Brains";
        this.hud.virusLevel.innerHTML = "" + this.virus.level;
        this.hud.studyLevel.innerHTML = "" + this.study.level;
        var timeline = setInterval(function () {
            // Brains per sec
            var brainsPerSec = _this.updateBrainsPerSec();
            _this.brains += brainsPerSec;
            _this.hud.brainsPerSec.innerHTML = brainsPerSec.toFixed(2) + " Per Sec";
            _this.hud.brains.innerHTML = "" + _this.brains.toFixed(2);
            // Study
            _this.updateStudy();
        }, 1000);
    };
    Game.prototype.addEventsListener = function (elements) {
        var _this = this;
        elements.bigBigBrain.addEventListener('click', function () {
            _this.addBrain(_this.player.power);
        });
        elements.zombieCase.addEventListener('click', function () {
            _this.buyZombie();
        });
        elements.virusResearch.addEventListener('click', function () {
            _this.updateResearch(_this.player.intelligence);
        });
        elements.trainingResearch.addEventListener('click', function () {
            _this.updateTraining();
        });
    };
    Game.prototype.addBrain = function (power) {
        var _this = this;
        this.brains += power;
        this.hud.brains.innerHTML = "" + this.brains.toFixed(2);
        this.hud.bigBigBrain.style.transform = 'scale(1.2)';
        setTimeout(function () {
            _this.hud.bigBigBrain.style.transform = 'scale(1.0)';
        }, 100);
    };
    Game.prototype.updateBrainsPerSec = function () {
        var virusEfficiency = this.virus.level / 10;
        return this.brainsPerSec = virusEfficiency * this.zombies.quantity;
    };
    Game.prototype.buyZombie = function () {
        if (this.brains - this.zombies.price >= 0) {
            this.brains -= this.zombies.price;
            this.zombies.quantity++;
            this.hud.brainsPerSec.innerHTML = this.updateBrainsPerSec().toFixed(2) + " Per Sec";
            this.zombies.price *= 1.5;
            this.hud.zombiePrice.innerHTML = "Cost: " + this.zombies.price.toFixed(2) + " Brains";
            this.hud.brains.innerHTML = "" + this.brains.toFixed(2);
            this.hud.nbZombies.innerHTML = "" + this.zombies.quantity;
        }
    };
    Game.prototype.updateResearch = function (intelligence) {
        if (this.brains - intelligence >= 0) {
            this.brains -= intelligence;
            this.hud.brains.innerHTML = "" + this.brains.toFixed(2);
            this.virus.progression += intelligence;
            if (this.virus.progression >= this.virus.level * 100) {
                this.virus.progression = 0;
                this.virus.level++;
                this.hud.virusLevel.innerHTML = "" + this.virus.level;
            }
            var newGaugeWidth = Math.round((this.virus.progression * 100) / (this.virus.level * 100));
            this.hud.virusGauge.style.width = newGaugeWidth + "%";
            if (newGaugeWidth >= 0 && newGaugeWidth <= 33) {
                this.hud.virusIcon.classList.add('green');
                this.hud.virusIcon.classList.remove('orange');
                this.hud.virusIcon.classList.remove('red');
            }
            else if (newGaugeWidth >= 34 && newGaugeWidth <= 66) {
                this.hud.virusIcon.classList.add('orange');
                this.hud.virusIcon.classList.remove('green');
                this.hud.virusIcon.classList.remove('red');
            }
            else if (newGaugeWidth >= 67 && newGaugeWidth <= 100) {
                this.hud.virusIcon.classList.add('red');
                this.hud.virusIcon.classList.remove('orange');
                this.hud.virusIcon.classList.remove('green');
            }
        }
    };
    Game.prototype.updateStudy = function () {
        this.study.progression++;
        if (this.study.progression >= this.study.nextLevel) {
            this.player.intelligence++;
            this.study.level++;
            this.study.progression = 0;
            this.study.nextLevel *= 1.5;
        }
        var newGaugeWidth = Math.round((this.study.progression * 100) / (this.study.nextLevel));
        this.hud.studyGauge.style.width = newGaugeWidth + "%";
    };
    Game.prototype.updateTraining = function () {
        this.training.progression++;
        if (this.training.progression >= this.training.level * 100) {
            this.training.progression = 0;
            this.training.level++;
            this.hud.trainingLevel.innerHTML = "" + this.training.level;
            this.player.power++;
        }
        var newGaugeWidth = Math.round((this.training.progression * 100) / (this.training.level * 100));
        this.hud.trainingGauge.style.width = newGaugeWidth + "%";
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
    zombiePrice: getEl('price'),
    virusResearch: getEl('research-zvirus-boost'),
    virusGauge: getEl('virus-gauge'),
    virusIcon: getEl('virus-icon'),
    virusLevel: getEl('virus-level'),
    studyResearch: getEl('study-upgrade'),
    studyGauge: getEl('study-gauge'),
    studyIcon: getEl('study-icon'),
    studyLevel: getEl('study-level'),
    trainingResearch: getEl('training-upgrade'),
    trainingGauge: getEl('training-gauge'),
    trainingIcon: getEl('training-icon'),
    trainingLevel: getEl('training-level')
};
var GAME = new game_1.Game(hud);
GAME.initGame();
GAME.addEventsListener(hud);
function getEl(id) {
    return document.getElementById(id);
}

},{"./game":1}]},{},[2]);
