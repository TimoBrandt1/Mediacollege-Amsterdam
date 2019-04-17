const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ship = new Image(50,50);
ship.src = "img/Spaceship.png";

let shipRotation = 0;
let startRotation = 0;
let shipVelocity = 0;
let speed = 2;

let xPos = 100;
let yPos = 100;

ship.addEventListener('load',()=> {
  animate();
})

function animate()  {
  context.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.translate(xPos, yPos);
  context.rotate(shipRotation);
  context.drawImage(ship, -ship.width/2, -ship.height/2);
  context.resetTransform();

  //Uit het scherm weer in het scherm
  if(xPos > canvas.width) xPos = 0;
  if(xPos < 0) xPos = canvas.width;
  if(yPos > canvas.height) yPos = 0;
  if(yPos < 0) yPos = canvas.height;

  xPos += speed * Math.cos(shipRotation*57.2957795 * Math.PI / 180);
  yPos += speed * Math.sin(shipRotation*57.2957795 * Math.PI / 180);

  if(shipVelocity > 0) {
    shipRotation += shipVelocity;
    shipVelocity -= 0.001;
  }
  else if(shipVelocity < 0) {
    shipRotation += shipVelocity;
    shipVelocity += 0.001;
  }
}

var map = {};
onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = (e.type == 'keydown');

    //W more speed
    if(map[87]) speed++;
    //S less speed
    if(map[83] && speed > 1) speed--;

    //A left
    if(map[65]) shipVelocity = -0.05;
    //D right
    if(map[68]) shipVelocity = 0.05;
}
