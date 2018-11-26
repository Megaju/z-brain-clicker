import { player, zombies, virus, study, training, hud } from "./models";

export class Game {
  player: player;
  brains: number;
  zombies: zombies;
  virus: virus;
  study: study;
  training: training;
  hud: hud;

  constructor(private HUD: hud) {
    this.hud = HUD;
  }
  
  initGame() {
    this.brains = 0;
    
    this.player = {
      power: 1,
      intelligence: 1
    }
    this.zombies = {
      quantity: 0,
      price: 25
    }
    this.virus = {
      level: 1,
      progression: 0
    }
    this.study = {
      level: 1,
      progression: 0
    }
    this.training = {
      level: 1,
      progression: 0
    }
  }

  addEventsListener(elements: hud) {
    elements.bigBigBrain.addEventListener('click', () => {
      this.addBrain();
    });
    elements.zombieCase.addEventListener('click', () => {
      this.buyZombie();
    });
  }

  addBrain() {
    this.brains += this.player.power;
    this.hud.brains.innerHTML = `${this.brains}`;
    this.hud.bigBigBrain.style.transform = 'scale(1.2)';
    setTimeout(() => {
      this.hud.bigBigBrain.style.transform = 'scale(1.0)';
    }, 100);
  }

  buyZombie() {
    if (this.brains - this.zombies.price >= 0) {
      this.brains -= this.zombies.price;
      this.zombies.quantity++;
      this.zombies.price *= 1.5;
      this.hud.zombiePrice.innerHTML = `Cost: ${this.zombies.price} Brains`;
      this.hud.brains.innerHTML = `${this.brains}`;
      this.hud.nbZombies.innerHTML = `${this.zombies.quantity}`;
    }
  }
}
