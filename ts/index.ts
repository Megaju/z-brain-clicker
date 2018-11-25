const brainEl = document.getElementById('big-big-brain');
const nbBrainEl = document.getElementById('nbBrain');

let brain = 0;

displayNbBrain();

brainEl.addEventListener('click', function() {
  brain++;
  displayNbBrain();
  brainAnimation();
});

function displayNbBrain() {
  nbBrainEl.innerHTML = `${brain}`;
}

function brainAnimation() {
  brainEl.style.transform = 'scale(1.2)';
  setTimeout(() => {
    brainEl.style.transform = 'scale(1)';
  }, 100);
}