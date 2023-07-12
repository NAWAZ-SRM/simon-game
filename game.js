
var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedpattern=[];
var started=false;
var level =0;
$(document).keypress(function(){
       if (!started){
              $("#level-title").text("level "+ level);
              nextSequence();
              started=true;
       }
});


$(".btn").click(function(){
       var userChosencolor=$(this).attr("id");
       userClickedpattern.push(userChosencolor);
       playSound(userChosencolor);
       animatePress(userChosencolor);

       checkAnswer(userClickedpattern.length-1);
     });

 function checkAnswer(currentLevel) {
       if (gamePattern[currentLevel]==userClickedpattern[currentLevel]){
              console.log("success");
              if(userClickedpattern.length===gamePattern.length){
                     setTimeout(function()  {
                            nextSequence();
                     }, 1000);
              }
       }

       else{
              console.log("wrong");

              playSound("wrong");

              $("body").addClass("game-over");
              setTimeout(function()  {
                     $("body").removeClass("game-over");
              }, 200);
       
              $("#level-title").text("Game over ,Press any Key to Restart");

              startOver();

       }

      
}


function nextSequence() {
       userClickedpattern = [];
       level++;
       $("#level-title").text("level "+ level); 
      
       var randomNumber=Math.floor((Math.random()*4));
       var randomChosencolor=buttonColors[randomNumber];
       gamePattern.push(randomChosencolor);
       $("#"+ randomChosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
       playSound(randomChosencolor);

}

function playSound(name) {
       var audio= new Audio("sounds/"+ name + ".mp3");
       audio.play();
}

function animatePress(currentcolor) {
       $("#"+currentcolor).addClass("pressed");
       setTimeout(function()  {
              $("#"+currentcolor).removeClass("pressed");
       }, 100);
       
}


function startOver() {
       gamePattern=[];
       
        started=false;
        level =0;
}




