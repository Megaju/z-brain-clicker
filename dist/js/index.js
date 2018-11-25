var brainEl = document.getElementById('big-big-brain');
var nbBrainEl = document.getElementById('nbBrain');
var brain = 0;
brainEl.addEventListener('click', function () {
    brain++;
    displayNbBrain();
});
function displayNbBrain() {
    nbBrainEl.innerHTML = "" + brain;
}
