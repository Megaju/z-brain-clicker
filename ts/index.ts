const brainEl = document.getElementById('big-big-brain');
const nbBrainEl = document.getElementById('nbBrain');

const zMarket = document.getElementById('z-market');
const zombieCase = document.getElementById('zombie');

zombieCase.addEventListener('click', function() {
  buyZombie();
});

let brain = 0;

const zombie: zombie = {
  nbZombie: 0,
  brainPerSec: 0,
  price: 25
}
displayZombieCase();

displayNbBrain();

brainEl.addEventListener('click', function() {
  brain++;
  displayNbBrain();
  brainAnimation();
});

function displayNbBrain() {
  nbBrainEl.innerHTML = `${Math.round(brain)}`;
}

function brainAnimation() {
  brainEl.style.transform = 'scale(1.2)';
  setTimeout(() => {
    brainEl.style.transform = 'scale(1)';
  }, 100);
}

function start() {
  const timeline = setInterval(() => {
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
  const priceEl = document.querySelector('#zombie #price');
  const brainPerSec = document.getElementById('brainPerSec');
  const zombieCount = document.getElementById('count');
  priceEl.innerHTML = `${zombie.price} brains`;
  brainPerSec.innerHTML = `${zombie.brainPerSec} Brains per second`;
  zombieCount.innerHTML = `${zombie.nbZombie}`;
}

interface zombie {
  nbZombie: number;
  brainPerSec: number;
  price: number;
}

start();