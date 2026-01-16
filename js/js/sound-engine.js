const sounds = {
  click: new Audio("assets/sounds/click.mp3"),
  generate: new Audio("assets/sounds/generate.mp3")
};

function playSound(name) {
  if (sounds[name]) sounds[name].play();
}
