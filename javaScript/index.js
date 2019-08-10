$(document).ready(function () {
  $(window).ready(function () {
    $('.gameStage').ready(function () {
      //Creating Background of GameStage
      let background = document.createElement('div');
      background.id = 'background';
      background.classList.add('mainBodyBackground');
      document.getElementById('mainBody').appendChild(background);

      //Creating Ground of GameStage
      let ground = document.createElement('div');
      ground.id = 'ground';
      ground.classList.add('mainBodyGround');
      document.getElementById('mainBody').appendChild(ground);

      let ground2 = document.createElement('div');
      ground2.id = 'ground2';
      ground2.classList.add('mainBodyGround2');
      document.getElementById('mainBody').appendChild(ground2);

      //Creating Bottom Pipes
      let pipe1 = document.createElement('div');
      pipe1.id = 'pipe';
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

      //Creating Top Pipes
      let topPipe = document.createElement('div');
      topPipe.id = 'topPipe';
      topPipe.classList.add('topPipeStructure');
      topPipe.style.left = 0 + 'px';
      document.getElementById('mainBody').appendChild(topPipe);

      let topPipe2 = document.createElement('div');
      topPipe2.id = 'topPipe2';
      topPipe2.classList.add('topPipeStructure');
      topPipe2.style.left = 240 + 'px';
      document.getElementById('mainBody').appendChild(topPipe2);

      let topPipe3 = document.createElement('div');
      topPipe3.id = 'topPipe3';
      topPipe3.classList.add('topPipeStructure');
      topPipe3.style.left = 480 + 'px';
      document.getElementById('mainBody').appendChild(topPipe3);

      frameCreation();
    });  //End of $(gameStage).ready

    // If the first frame is showing then this value will be true, When its
    // time to go to the next one we flip flop this boolean
    var firstFrame = true;

    function frameCreation() {

      var gameWidth = 1000;
      var height = 500;

      var left_range = 0;

      var elem = document.getElementById('ground');
      var left = 0;

      var elem2 = document.getElementById('ground2');
      var left2 = 1000;

      var pipe1Left = 480;
      var elem3 = document.getElementById('pipe');
      var left3 = 0;

      var pipe2Left = 480;
      var elem4 = document.getElementById('pipe2');
      var left4 = 240;

      var pipe3Left = 480;
      var elem5 = document.getElementById('pipe3');
      var left5 = 480;

      var topPipeLeft = 480;
      var elem6 = document.getElementById('topPipe');
      var topLeft = 0;

      var topPipe2Left = 480;
      var elem7 = document.getElementById('topPipe2');
      var topLeft2 = 240;

      var topPipe3Left = 480;
      var elem8 = document.getElementById('topPipe3');
      var topLeft3 = 480;

      setInterval(function() {
        left_range++;

        if (left_range >= gameWidth) {
          left_range = 0;

          if (firstFrame) {
            //Sends Ground1 to Back
            elem.style.left = gameWidth + 'px';
            left = gameWidth;
          } else {
            //Sends Ground2 to Back
            elem2.style.left = gameWidth + 'px';
            left2 = gameWidth;
          }
          firstFrame = !firstFrame;
        } else {
          //Ground Animation
          left--;
          elem.style.left = left + 'px';

          left2--;
          elem2.style.left = left2 + 'px';

          //Pipe Animation
          left3--;
          elem3.style.left = left3 + 'px';

          left4--;
          elem4.style.left = left4 + 'px';

          left5--;
          elem5.style.left = left5 + 'px';

          //topPipe Animation
          topLeft--;
          elem6.style.left = topLeft + 'px';

          topLeft2--;
          elem7.style.left = topLeft2 + 'px';

          topLeft3--;
          elem8.style.left = topLeft3 + 'px';
        }

        //Setting topPipe's marginTop
        var pipeMarginTop = document.getElementById('pipe').style.marginTop;
        var pipeMTInteger = parseInt(pipeMarginTop, 10);

        document.getElementById('topPipe').style.marginTop = (pipeMTInteger - 657) + 'px';

        //Setting topPipe2's marginTop
        var pipe2MarginTop = document.getElementById('pipe2').style.marginTop;
        var pipe2MTInteger = parseInt(pipe2MarginTop, 10);

        document.getElementById('topPipe2').style.marginTop = (pipe2MTInteger - 657) + 'px';

        //Setting topPipe3's marginTop
        var pipe3MarginTop = document.getElementById('pipe3').style.marginTop;
        var pipe3MTInteger = parseInt(pipe3MarginTop, 10);

        document.getElementById('topPipe3').style.marginTop = (pipe3MTInteger - 657) + 'px';

        //Sends Pipe to Back
        if (elem3.style.left === -240 + 'px')  {
          elem3.style.left = pipe1Left + 'px';
          left3 = pipe1Left;
          marginCalc();
        }

        //Sends Pipe2 to Back
        if (elem4.style.left === -240 + 'px') {
          elem4.style.left = pipe2Left + 'px';
          left4 = pipe2Left;
          marginCalc2();
        }

        //Sends Pipe3 to Back
        if (elem5.style.left === -240 + 'px') {
          elem5.style.left = pipe3Left + 'px';
          left5 = pipe3Left;
          marginCalc3();
        }

        //Sends topPipe to Back
        if (elem6.style.left === -240 + 'px') {
          elem6.style.left = topPipeLeft + 'px';
          topLeft = topPipeLeft;
        }

        //Sends topPipe2 to Back
        if (elem7.style.left === -240 + 'px') {
          elem7.style.left = topPipe2Left + 'px';
          topLeft2 = topPipe2Left;
        }

        //Sends topPipe3 to Back
        if (elem8.style.left === -240 + 'px') {
          elem8.style.left = topPipe3Left + 'px';
          topLeft3 = topPipe3Left;
        }

        //Pipe Height Check
        if (elem3.style.marginTop < 205 + 'px')  {
          marginCalc();
        } else if (elem3.style.marginTop > 460 + 'px') {
          marginCalc();
        }

        //Pipe2 Height Check
        if (elem4.style.marginTop < 205 + 'px')  {
          marginCalc2();
        } else if (elem4.style.marginTop > 460 + 'px') {
          marginCalc2();
        }

        //Pipe3 Height Check
        if (elem5.style.marginTop < 205 + 'px')  {
          marginCalc3();
        } else if (elem5.style.marginTop > 460 + 'px') {
          marginCalc3();
        }

        //Function to Change Pipe MarginTop
        function marginCalc() {
          elem3.style.marginTop = (Math.floor(Math.random() * 1000) + 205) + 'px';
        }

        //Function to Change Pipe2 MarginTop
        function marginCalc2() {
          elem4.style.marginTop = (Math.floor(Math.random() * 1000) + 205) + 'px';
        }

        //Function to Change Pipe3 MarginTop
        function marginCalc3() {
          elem5.style.marginTop = (Math.floor(Math.random() * 1000) + 200) + 'px';
        }
      }, 1);
    }
  }); //End of $(window).ready
}); //End of $(document).ready