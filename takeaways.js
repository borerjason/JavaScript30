1. 
// Query selector from data attribute
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

// add class to an items class
key.classList.add('playing');

// add eventlisteners to the widow if want to apply to everything
window.addEventListener('keydown', playSound);

// use transitionend to listen for the end of a transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));