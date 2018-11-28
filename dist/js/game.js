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
            progression: 0
        };
        this.training = {
            level: 1,
            progression: 0
        };
        var timeline = setInterval(function () {
            var brainsPerSec = _this.updateBrainsPerSec();
            _this.brains += brainsPerSec;
            _this.hud.brainsPerSec.innerHTML = brainsPerSec.toFixed(2) + " Per Sec";
            _this.hud.brains.innerHTML = "" + _this.brains.toFixed(2);
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
    return Game;
}());
exports.Game = Game;
