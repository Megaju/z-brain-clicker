import { player, zombies, virus, study, training, hud } from "./models";

export class Game {

  player: player;
  brains: number;
  brainsPerSec: number;
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
      level: 60,
      progression: 0
    }
    this.study = {
      level: 1,
      progression: 0,
      nextLevel: 600
    }
    this.training = {
      level: 1,
      progression: 0
    }

    this.hud.brains.innerHTML = `${this.brains.toFixed(2)}`;
    this.hud.brainsPerSec.innerHTML = `${this.updateBrainsPerSec().toFixed(2)} Per Sec`;
    this.hud.nbZombies.innerHTML = `${this.zombies.quantity}`;
    this.hud.zombiePrice.innerHTML = `Cost: ${this.zombies.price.toFixed(2)} Brains`;
    this.hud.virusLevel.innerHTML = `${this.virus.level}`;

    const timeline = setInterval(() => {
      // Brains per sec
      const brainsPerSec = this.updateBrainsPerSec();
      this.brains += brainsPerSec;
      this.hud.brainsPerSec.innerHTML = `${brainsPerSec.toFixed(2)} Per Sec`;
      this.hud.brains.innerHTML = `${this.brains.toFixed(2)}`;
      // Study
      this.updateStudy();
    }, 1000);
  }

  addEventsListener(elements: hud) {
    elements.bigBigBrain.addEventListener('click', () => {
      this.addBrain(this.player.power);
    });
    elements.zombieCase.addEventListener('click', () => {
      this.buyZombie();
    });
    elements.virusResearch.addEventListener('click', () => {
      this.updateResearch(this.player.intelligence);
    });
  }

  addBrain(power: number) {
    this.brains += power;
    this.hud.brains.innerHTML = `${this.brains.toFixed(2)}`;
    this.hud.bigBigBrain.style.transform = 'scale(1.2)';
    setTimeout(() => {
      this.hud.bigBigBrain.style.transform = 'scale(1.0)';
    }, 100);
  }

  updateBrainsPerSec() {
    const virusEfficiency = this.virus.level / 10;
    return this.brainsPerSec = virusEfficiency * this.zombies.quantity; 
  }

  buyZombie() {
    if (this.brains - this.zombies.price >= 0) {
      this.brains -= this.zombies.price;
      this.zombies.quantity++;
      this.hud.brainsPerSec.innerHTML = `${this.updateBrainsPerSec().toFixed(2)} Per Sec`;
      this.zombies.price *= 1.5;
      this.hud.zombiePrice.innerHTML = `Cost: ${this.zombies.price.toFixed(2)} Brains`;
      this.hud.brains.innerHTML = `${this.brains.toFixed(2)}`;
      this.hud.nbZombies.innerHTML = `${this.zombies.quantity}`;
    }
  }
  
  updateResearch(intelligence: number) {
    if (this.brains - intelligence >= 0) {
      this.brains -= intelligence;
      this.hud.brains.innerHTML = `${this.brains.toFixed(2)}`;
      this.virus.progression += intelligence;
      if (this.virus.progression >= this.virus.level * 100) {
        this.virus.progression = 0;
        this.virus.level++;
        this.hud.virusLevel.innerHTML = `${this.virus.level}`;
      }
      const newGaugeWidth = Math.round((this.virus.progression * 100) / (this.virus.level * 100));
      this.hud.virusGauge.style.width = `${newGaugeWidth}%`;
      if (newGaugeWidth >= 0 && newGaugeWidth <= 33) {
        this.hud.virusIcon.classList.add('green');
        this.hud.virusIcon.classList.remove('orange');
        this.hud.virusIcon.classList.remove('red');
      } else if (newGaugeWidth >= 34 && newGaugeWidth <= 66) {
        this.hud.virusIcon.classList.add('orange');
        this.hud.virusIcon.classList.remove('green');
        this.hud.virusIcon.classList.remove('red');
      } else if (newGaugeWidth >= 67 && newGaugeWidth <= 100) {
        this.hud.virusIcon.classList.add('red');
        this.hud.virusIcon.classList.remove('orange');
        this.hud.virusIcon.classList.remove('green');
      }
    }
  }

  updateStudy() {
    this.study.progression++;
    console.log(this.study.progression);
    if (this.study.progression >= this.study.nextLevel) {
      this.player.intelligence++;
      this.study.level++;
      this.study.progression = 0;
      this.study.nextLevel *= 1.5;
    }
    const newGaugeWidth = Math.round((this.study.progression * 100) / (this.study.nextLevel));
    console.log(newGaugeWidth);
    this.hud.studyGauge.style.width = `${newGaugeWidth}%`;
  }

}
