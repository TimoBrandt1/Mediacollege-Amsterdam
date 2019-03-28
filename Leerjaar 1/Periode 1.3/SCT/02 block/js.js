class Block {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  draw(){
    context.beginPath();
    context.fillStyle = getRandomColor();
    context.strokeStyle = getRandomColor();
    context.rect(this.x1, this.y1, this.x2, this.y2);
    context.closePath();
    context.stroke();
    context.fill();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRdmNbr(max){
  return Math.floor(Math.random() * max);
}

function animate(){
  let myX = getRdmNbr(canvas.width);
  let myY = getRdmNbr(canvas.height);
  requestAnimationFrame(animate);
  let myBlock = new Block(myX, myY, 10, 10);
  myBlock.draw();
}

for (i = 0; i < 5000; i++) {
  animate();
  console.log(i);
}
