$(document).ready(function () {
  $(window).ready(function () {
    $('.gameStage').ready(function () {
      let bird = document.createElement('div');
      bird.id = 'birdFrame1';
      bird.classList.add('bird');
      document.getElementById('mainBody').appendChild(bird);

      let bird2 = document.createElement('div');
      bird2.id = 'birdFrame2';
      bird2.classList.add('bird');
      bird2.style.backgroundPositionX = 'center';
      document.getElementById('mainBody').appendChild(bird2);

      let bird3 = document.createElement('div');

    })
  })
});