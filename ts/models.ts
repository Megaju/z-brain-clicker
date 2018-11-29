export interface player {
  power: number;
  intelligence: number;
}

export interface zombies {
  quantity: number;
  price: number;
}

export interface virus {
  level: number;
  progression: number;
}

export interface study {
  level: number;
  progression: number;
  nextLevel: number;
}

export interface training {
  level: number;
  progression: number;
}

export interface hud {
  brains: HTMLElement;
  brainsPerSec: HTMLElement;
  nbZombies: HTMLElement;
  bigBigBrain: HTMLElement;
  zombieCase: HTMLElement;
  zombiePrice: HTMLElement;
  virusResearch: HTMLElement;
  virusGauge: HTMLElement;
  virusIcon: HTMLElement;
  virusLevel: HTMLElement;
  studyResearch: HTMLElement;
  studyGauge: HTMLElement;
  studyIcon: HTMLElement;
  studyLevel: HTMLElement;
}