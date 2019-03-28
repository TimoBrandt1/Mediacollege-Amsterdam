let sun = document.getElementById('img_2');
let title = document.getElementById('Title');

function button_1()
{
  document.body.style.backgroundImage = "url('images/sunset.jpg')"
  kop.style.color = "purple"
  onClick();
}

function button_2()
{
  document.body.style.backgroundImage = "url('images/moon.jpg')"
  kop.style.color = "white"
  onClick();
}
function button_3()
{
  document.body.style.backgroundImage = '';
  document.body.style.backgroundColor = 'black'
  kop.style.color = "red"
  onClick();
}

let LastClick = 0;

function onClick() {
    if(LastClick != 0) {
    title.innerHTML = "De tijd tussen de 2 laatste clicks is " + Math.floor((new Date()/1000)-(LastClick/1000)) + " seconden! :D";
    LastClick = new Date();
  } else {
    LastClick = new Date();
  }
}
