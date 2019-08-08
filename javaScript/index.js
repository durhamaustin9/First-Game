$(document).ready(function () {
  $(window).ready(function () {
    $('.gameStage').ready(function () {
      //Creating Background of GameStage
      let background = document.createElement('div');
      background.id = 'background';
      background.classList.add('mainBodyBackground');
      document.getElementById('mainBody').appendChild(background);

      let ground = document.createElement('div');
      ground.id = 'ground1';
      ground.classList.add('mainBodyGround');
      document.getElementById('mainBody').appendChild(ground);

      let ground2 = document.createElement('div');
      ground2.id = 'ground2';
      ground2.classList.add('mainBodyGround2');
      document.getElementById('mainBody').appendChild(ground2);

      let pipe1 = document.createElement('div');
      pipe1.id = 'pipe1';
      pipe1.classList.add('bottomPipeStructure');
      pipe1.style.left = 0 + 'px';
      pipe1.style.marginTop = (Math.floor(Math.random() * 1000)) + 'px';
      document.getElementById('mainBody').appendChild(pipe1);

      let pipe2 = document.createElement('div');
      pipe2.id = 'pipe2';
      pipe2.classList.add('bottomPipeStructure');
      pipe2.style.left = 240 + 'px';
      pipe2.style.marginTop = (Math.floor(Math.random() * 1000)) + 'px';
      document.getElementById('mainBody').appendChild(pipe2);

      let pipe3 = document.createElement('div');
      pipe3.id = 'pipe3';
      pipe3.classList.add('bottomPipeStructure');
      pipe3.style.left = 480 + 'px';
      pipe3.style.marginTop = (Math.floor(Math.random() * 1000)) + 'px';
      document.getElementById('mainBody').appendChild(pipe3);

      let topPipe1 = document.createElement('div');
      topPipe1.id = 'topPipe1';
      topPipe1.classList.add('topPipeStructure');
      topPipe1.style.left = 0 + 'px';
      // topPipe1.style.marginBottom = ;
      document.getElementById('mainBody').appendChild(topPipe1);

      frameCreation();
    });  //End of $(gameStage).ready

    // If the first frame is showing then this value will be true, When its
    // time to go to the next one we flip flop this boolean
    var firstFrame = true;

    function frameCreation() {

      var gameWidth = 1000;
      var height = 500;
      var left_range = 0;
      var elem = document.getElementById('ground1');
      var left = 0;
      var elem2 = document.getElementById('ground2');
      var left2 = 1000;

      var pipe1Left = 480;
      var elem3 = document.getElementById('pipe1');
      var left3 = 0;

      var pipe2Left = 480;
      var elem4 = document.getElementById('pipe2');
      var left4 = 240;

      var pipe3Left = 480;
      var elem5 = document.getElementById('pipe3');
      var left5 = 480;

      setInterval(function() {
        left_range++;

        if (left_range >= gameWidth) {
          left_range = 0;

          if (firstFrame) {
            elem.style.left = gameWidth + 'px';
            left = gameWidth;
          } else {
            elem2.style.left = gameWidth + 'px';
            left2 = gameWidth;
          }
          firstFrame = !firstFrame;
        } else {
          left--;
          elem.style.left = left + 'px';

          left2--;
          elem2.style.left = left2 + 'px';

          left3--;
          elem3.style.left = left3 + 'px';

          left4--;
          elem4.style.left = left4 + 'px';

          left5--;
          elem5.style.left = left5 + 'px'
        }

        if (elem3.style.left === -240 + 'px')  {
          elem3.style.left = pipe1Left + 'px';
          left3 = pipe1Left;
          marginCalc();
        }

        if (elem4.style.left === -240 + 'px') {
          elem4.style.left = pipe2Left + 'px';
          left4 = pipe2Left;
          marginCalc2();
        }

        if (elem5.style.left === -240 + 'px') {
          elem5.style.left = pipe3Left + 'px';
          left5 = pipe3Left;
          marginCalc3();
        }

        //Pipe height checker
        if (elem3.style.marginTop < 200 + 'px')  {
          marginCalc();
        } else if (elem3.style.marginTop > 460 + 'px') {
          marginCalc();
        }

        if (elem4.style.marginTop < 200 + 'px')  {
          marginCalc2();
        } else if (elem4.style.marginTop > 460 + 'px') {
          marginCalc2();
        }

        if (elem5.style.marginTop < 200 + 'px')  {
          marginCalc3();
        } else if (elem5.style.marginTop > 460 + 'px') {
          marginCalc3();
        }

        function marginCalc() {
          elem3.style.marginTop = (Math.floor(Math.random() * 1000) + 200) + 'px';
        }

        function marginCalc2() {
          elem4.style.marginTop = (Math.floor(Math.random() * 1000) + 200) + 'px';
        }

        function marginCalc3() {
          elem5.style.marginTop = (Math.floor(Math.random() * 1000) + 200) + 'px';
        }
      }, 1);
    }


    function testingFunction() {
      document.getElementById();
    }
  }); //End of $(window).ready
}); //End of $(document).ready