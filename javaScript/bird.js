$(document).ready(function () {
  $(window).ready(function () {
    $('.gameStage').ready(function () {
      let bird = document.createElement('div');
      bird.id = 'birdFrame';
      bird.classList.add('bird');
      bird.style.display = 'block';
      bird.style.transform = 'rotate(0deg)';
      bird.style.marginTop = '-22.5px';
      document.getElementById('mainBody').appendChild(bird);

      let bird2 = document.createElement('div');
      bird2.id = 'birdFrame2';
      bird2.classList.add('bird');
      bird2.style.backgroundPositionX = 'center';
      bird2.style.display = 'none';
      bird2.style.transform = 'rotate(0deg)';
      bird2.style.marginTop = '-22.5px';
      document.getElementById('mainBody').appendChild(bird2);

      let bird3 = document.createElement('div');
      bird3.id = 'birdFrame3';
      bird3.classList.add('bird');
      bird3.style.backgroundPositionX = 'right';
      bird3.style.display = 'none';
      bird3.style.transform = 'rotate(0deg)';
      bird3.style.marginTop = '-22.5px';
      document.getElementById('mainBody').appendChild(bird3);

      setInterval(function () {
        var frame1 = document.getElementById('birdFrame').style.display;
        var frame2 = document.getElementById('birdFrame2').style.display;
        var frame3 = document.getElementById('birdFrame3').style.display;

        if (frame1 === 'block') {
          document.getElementById('birdFrame').style.display = 'none';

          document.getElementById('birdFrame2').style.display = 'block';
        }

        if (frame2 === 'block') {
          document.getElementById('birdFrame2').style.display = 'none';

          document.getElementById('birdFrame3').style.display = 'block';
        }

        if (frame3 === 'block') {
          document.getElementById('birdFrame3').style.display = 'none';

          document.getElementById('birdFrame').style.display = 'block';
        }
      }, 160);

      var birdPos = document.getElementById('birdFrame');
      var birdPos2 = document.getElementById('birdFrame2');
      var birdPos3 = document.getElementById('birdFrame3');
      var pos = -1;

      document.body.onkeyup = function (e) {
        if (e.keyCode === 32) {

          setInterval(function () {
            if (pos === -21)  {
              clearInterval();
            } else {
              birdPos.style.transform = 'rotate(' + pos + 'deg)';
              birdPos2.style.transform = 'rotate(' + pos + 'deg)';
              birdPos3.style.transform = 'rotate(' + pos + 'deg)';

              pos--;
            }
          }, 10);

          var birdJump = birdPos.style.marginTop - 40;

          birdPos.style.marginTop = (birdJump + 'px');

          console.log(birdJump);

          // birdPos.style

        }
      }

      // document.body.onkeyup = function(e) {
      //   if(e.keyCode === 32)  {
      //     var rotationPos1 = document.getElementById('birdFrame3');
      //     var test = parseInt(rotationPos1);
      //     var pos = -1;
      //
      //     rotationPos1.style.transform--;
      //
      //     console.log(rotationPos1.style.transform);

          // setInterval(function () {
          //   if (test === -20)  {
          //     pos = -1;
          //
          //     clearInterval();
          //   } else {
          //
          //     document.getElementById('birdFrame').style.transform = ('rotate(' + pos + 'deg)');
          //
          //     document.getElementById('birdFrame2').style.transform = ('rotate(' + pos + 'deg)');
          //
          //     document.getElementById('birdFrame3').style.transform = ('rotate(' + pos + 'deg)');
          //
          //     console.log(rotationPos1);
          //
          //     pos--;
          //   }
          // });



          // var elem2 = $('#birdFrame').css('marginTop');
          // var elem3 = document.getElementById('birdFrame');
          // var gravity = (parseInt(elem2) - 40);
          //
          // elem3.style.marginTop = gravity + 'px';
          //
          // var elem4 = $('#birdFrame2').css('marginTop');
          // var elem5 = document.getElementById('birdFrame2');
          // var gravity2 = (parseInt(elem4) - 40);
          //
          // elem5.style.marginTop = gravity2 + 'px';
          //
          // var elem6 = $('#birdFrame3').css('marginTop');
          // var elem7 = document.getElementById('birdFrame3');
          // var gravity3 = (parseInt(elem6) - 40);

          // elem7.style.marginTop = gravity3 + 'px';

          // document.getElementById('birdFrame1').style.marginTop = (elem3 - 50) + 'px';
          // document.getElementById('birdFrame2').style.marginTop = (elem3 - 50) + 'px';
          // document.getElementById('birdFrame3').style.marginTop = (elem3 - 50) + 'px';
      //   }
      // }
    })
  })
});