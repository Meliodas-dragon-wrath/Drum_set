var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick_bass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonCharacter = this.innerHTML;
   makesound(buttonCharacter);
  });

  document.addEventListener("keydown",function(event){
    makesound(event.key)
  });

function makesound(key){
  switch(key){
    case 'w':
    tom2.play();
    break;
    case 'a':
    tom1.play();
    break;
    case 's':
    snare.play();
    break;
    case 'd':
    crash.play();
    break;
    case 'j':
    tom3.play();
    break;
    case 'k':
    tom4.play();
    break;
    case 'l':
    kick_bass.play();
    break;
    default:
    console.log(key);
    }
  }

}
