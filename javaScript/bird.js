$(document).ready(function () {
  $(window).ready(function () {
    $('.gameStage').ready(function () {
      let bird = document.createElement('div');
      bird.id = 'birdFrame1';
      bird.classList.add('bird');
      bird.style.display = 'block';
      document.getElementById('mainBody').appendChild(bird);

      let bird2 = document.createElement('div');
      bird2.id = 'birdFrame2';
      bird2.classList.add('bird');
      bird2.style.backgroundPositionX = 'center';
      bird2.style.display = 'none';
      document.getElementById('mainBody').appendChild(bird2);

      let bird3 = document.createElement('div');
      bird3.id = 'birdFrame3';
      bird3.classList.add('bird');
      bird3.style.backgroundPositionX = 'right';
      bird3.style.display = 'none';
      document.getElementById('mainBody').appendChild(bird3);

      setInterval(function () {

      }, 1)
    })
  })
});