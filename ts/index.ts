import { Game } from "./game";
import { hud } from "./models";

const hud: hud = {
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
}

const GAME = new Game(hud);

GAME.initGame();
GAME.addEventsListener(hud);

function getEl(id: string): HTMLElement {
  return document.getElementById(id);
}