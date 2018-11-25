const brainEl = document.getElementById('big-big-brain');
const nbBrainEl = document.getElementById('nbBrain');

let brain = 0;

brainEl.addEventListener('click', function() {
  brain++;
  displayNbBrain();
});

function displayNbBrain() {
  nbBrainEl.innerHTML = `${brain}`;
}