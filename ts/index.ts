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
  virusLevel: getEl('virus-level')
}

const GAME = new Game(hud);

GAME.initGame();
GAME.addEventsListener(hud);

function getEl(id: string): HTMLElement {
  return document.getElementById(id);
}