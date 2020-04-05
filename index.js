// instead of writing a seperate function for same actions just different parameters make a general one that accepts both.

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) // i=7 since we know but if we dont't know so the general code will be
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){var click=this.innerHTML;  // (this) keyword returns the innerhtml of the button on click and this.innerHTML returns the text written in the button.
  handleact(click);
  ButtonAnimation(click)});
}
document.addEventListener("keypress",function(){var press=event.key; // (event) keyword returns the innerhtml of the button on click and event.key returns the text written in the button.
handleact(press);
ButtonAnimation(press)});
//general function
function handleact(key)
{
    switch (key)
    {
      case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
      case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
      case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
      case 'k':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
      case 'l':
      var audio = new Audio("sounds/kick-bass.wav");
      audio.play();
      break;
      case 'f':
      var audio = new Audio("sounds/hi hat.wav");
      audio.play();
      break;
    }
}
function ButtonAnimation(key)//for animation or the flashed border around the key
{
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
