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

      var elem3 = document.getElementById('pipe1');
      var left3 = 138;

      setInterval(function()  {
        left_range++;

        if(left_range >= gameWidth)  {
          left_range = 0;

          if(firstFrame)  {
            elem.style.left = gameWidth + 'px';
            left = gameWidth;
          }else{
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
        }

        if (left === -1)  {

          var marginTop = Math.floor(Math.random() * 420) + 166;

          console.log(marginTop);



          let pipe1 = document.createElement('div');
          pipe1.id = 'pipe1';
          pipe1.classList.add('pipeStructure');
          pipe1.style.left = 140 + 'px';
          pipe1.style.marginTop = (Math.floor(Math.random() * 420) + 166) + 'px';
          document.getElementById('mainBody').appendChild(pipe1);

          let pipe2 = document.createElement('div');
          pipe2.id = 'pipe2';
          pipe2.classList.add('pipeStructure');
          pipe2.style.left = 420 + 'px';
          pipe2.style.marginTop = (Math.floor(Math.random() * 420) + 166) + 'px';
          document.getElementById('mainBody').appendChild(pipe2);
        }


      }, 1);

    }

  }); //End of $(window).ready
}); //End of $(document).ready