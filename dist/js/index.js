var brainEl = document.getElementById('big-big-brain');
var nbBrainEl = document.getElementById('nbBrain');
var brain = 0;
displayNbBrain();
brainEl.addEventListener('click', function () {
    brain++;
    displayNbBrain();
    brainAnimation();
});
function displayNbBrain() {
    nbBrainEl.innerHTML = "" + brain;
}
function brainAnimation() {
    brainEl.style.transform = 'scale(1.2)';
    setTimeout(function () {
        brainEl.style.transform = 'scale(1)';
    }, 100);
}
