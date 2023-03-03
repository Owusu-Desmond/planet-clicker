const planet = document.getElementById('planet');
const tutorialPlanetPointing = document.querySelector('.tutorial-planet-pointing');
const tutorialPlanetPointed = document.querySelector('.tutorial-planet-pointed');
const tutorialPlanetBurst = document.querySelector('.tutorial-planet-burst');
const gamePlanet = document.querySelector('.game-planet');
const gamePlanetPointed = document.querySelector('.game-planet-pointed');
const gamePlanetSlightlyBurst = document.querySelector('.game-planet-sligtly-burst');
const gamePlanetBurst = document.querySelector('.game-planet-burst');
const ttext = document.getElementById('tctrl');
const gtext = document.getElementById('gctrl');
const finalMap = document.querySelector('.final-map');
const tutorial = document.querySelector('.tutorial');
const game = document.querySelector('.game');

// tutorial

setInterval(() => { // every 3 seconds
  setTimeout(() => { // after 3 seconds
    tutorialPlanetPointing.style.opacity = '0';
    tutorialPlanetPointed.style.display = 'block';
    ttext.innerHTML = 'Tapped';
    setTimeout(() => { // after 1 second
      tutorialPlanetPointed.style.display = 'none';
      tutorialPlanetBurst.style.display = 'block';
      ttext.innerHTML = 'Planet burst';
      setTimeout(() => { // after 2 seconds
        tutorialPlanetBurst.style.display = 'none';
        tutorialPlanetPointing.style.opacity = '1';
        ttext.innerHTML = 'Tap to play';
      }, 1000);
    }, 1000);
  }, 3000);
}, 5000);

// Game stage

planet.addEventListener('click', () => { // when user clicks on planet
  tutorial.remove();
  game.style.display = 'block';
  gamePlanet.style.display = 'block';

  gamePlanet.addEventListener('click', () => { // when user clicks on planet
    gamePlanet.style.display = 'none';
    gamePlanetPointed.style.display = 'block';
    gtext.innerHTML = 'Tapped';
    setTimeout(() => {
      gamePlanetPointed.style.display = 'none';
      gamePlanetSlightlyBurst.style.display = 'block';
      gtext.innerHTML = 'Slightly burst';
      setTimeout(() => {
        gamePlanetSlightlyBurst.style.display = 'none';
        gamePlanetBurst.style.display = 'block';
        gtext.innerHTML = 'Planet burst';
        setTimeout(() => {
          gamePlanetBurst.style.display = 'none';
          game.remove();
          finalMap.style.display = 'block';
        }, 1000);
      }, 1000);
    }, 1000);
  });
});
