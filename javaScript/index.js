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

      frameCreation();
    });  //End of $(gameStage).ready

    function frameCreation() {
      // console.log($('#ground').css('left'));
      // $('#ground').css('left', -(i * 10) + '%');

      // var elem = document.getElementById("myBar");
      // var width = 1;
      // var id = setInterval(frame, 10);
      // function frame() {
      //   if (width >= 100) {
      //     clearInterval(id);
      //   } else {
      //     width++;
      //     elem.style.width = width + '%';
      //   }
      // }

      var elem2 = document.getElementById('ground1');
      var left = 10;
      setInterval(function(){
        left++;
        elem2.style.left = - left + 'px';

        if(left > ($('.mainBodyGround').innerWidth())){
          console.log("The frame has gone past " + left);
        }
      }, 1);
      // setInterval(myMethod, 5000);
      //
      // function myMethod() {
      //   console.log($('#ground').css('left'));
      // }






    }

    $('.gameStage').ready(function () {
      // var elem3 = document.getElementById('ground1');
      var elem4 = $('#ground1').css('left');
      // var elem4 = elem3.style.left;
      var test = -50;

      console.log(elem4);



    });
  })  //End of $(window).ready
}); //End of $(document).ready