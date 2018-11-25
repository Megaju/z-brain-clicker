var brainEl = document.getElementById('big-big-brain');
var nbBrainEl = document.getElementById('nbBrain');
var zMarket = document.getElementById('z-market');
var zombieCase = document.getElementById('zombie');
zombieCase.addEventListener('click', function () {
    buyZombie();
});
var brain = 0;
var zombie = {
    nbZombie: 0,
    brainPerSec: 0,
    price: 25
};
displayZombieCase();
displayNbBrain();
brainEl.addEventListener('click', function () {
    brain++;
    displayNbBrain();
    brainAnimation();
});
function displayNbBrain() {
    nbBrainEl.innerHTML = "" + Math.round(brain);
}
function brainAnimation() {
    brainEl.style.transform = 'scale(1.2)';
    setTimeout(function () {
        brainEl.style.transform = 'scale(1)';
    }, 100);
}
function start() {
    var timeline = setInterval(function () {
        brain += zombie.brainPerSec;
        displayNbBrain();
    }, 1000);
}
function buyZombie() {
    if (brain >= zombie.price) {
        brain -= zombie.price;
        displayNbBrain();
        zombie.nbZombie++;
        zombie.brainPerSec += 0.1;
        zombie.brainPerSec = Math.round(zombie.brainPerSec * 10) / 10;
        zombie.price = Math.round(zombie.price + (zombie.nbZombie * 1.75));
        displayZombieCase();
    }
}
function displayZombieCase() {
    var priceEl = document.querySelector('#zombie #price');
    var brainPerSec = document.getElementById('brainPerSec');
    var zombieCount = document.getElementById('count');
    priceEl.innerHTML = zombie.price + " brains";
    brainPerSec.innerHTML = zombie.brainPerSec + " Brains per second";
    zombieCount.innerHTML = "" + zombie.nbZombie;
}
start();
