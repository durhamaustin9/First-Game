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
        var frame1 = document.getElementById('birdFrame1').style.display;
        var frame2 = document.getElementById('birdFrame2').style.display;
        var frame3 = document.getElementById('birdFrame3').style.display;

        if (frame1 === 'block') {
          document.getElementById('birdFrame1').style.display = 'none';

          document.getElementById('birdFrame2').style.display = 'block';
        }

        if (frame2 === 'block') {
          document.getElementById('birdFrame2').style.display = 'none';

          document.getElementById('birdFrame3').style.display = 'block';
        }

        if (frame3 === 'block') {
          document.getElementById('birdFrame3').style.display = 'none';

          document.getElementById('birdFrame1').style.display = 'block';
        }
      }, 160);

      document.body.onkeyup = function(e) {
        if(e.keyCode === 32)  {
          document.getElementById('birdFrame1').style.transform = 'rotate(-20deg)';

          document.getElementById('birdFrame2').style.transform = 'rotate(-20deg)';

          document.getElementById('birdFrame3').style.transform = 'rotate(-20deg)';

          var elem2 = document.getElementById('birdFrame2').style.marginTop;

          console.log(elem2);

          // document.getElementById('birdFrame1').style.marginTop = (elem3 - 50) + 'px';
          // document.getElementById('birdFrame2').style.marginTop = (elem3 - 50) + 'px';
          // document.getElementById('birdFrame3').style.marginTop = (elem3 - 50) + 'px';
        }
      }
    })
  })
});