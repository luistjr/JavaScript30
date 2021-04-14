const keys = document.querySelectorAll('.key');

window.addEventListener("keydown", playSound)

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    key.classList.add('playing');

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');
};