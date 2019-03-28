let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let waitSecs = 0;

//Hoofd
setTimeout(function hoofd(){
  context.beginPath();
  context.arc(200,250,150,0,2*Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 500);

//Linker oog
setTimeout(function linkerOog(){
  context.beginPath();
  context.arc(130,180,40,0,2*Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 1000);

//Rechter oog
setTimeout(function rechterOog(){
  context.beginPath();
  context.arc(270,180,40,0,2*Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 1500);

//Linker pupil
setTimeout(function Lpupil(){
  context.beginPath();
  context.arc(130,180,10,0,2*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 2000);
//Rechter pupil

//Vol
setTimeout(function vol(){
  context.beginPath();
  context.arc(270,180,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 2500);

//Mond
setTimeout(function mond(){
  context.beginPath();
  context.arc(200,250,20,0,1*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 3000);
//Bril links
setTimeout(function bril(){
  context.beginPath();
  context.arc(130,180,30,0,2*Math.PI);
  context.fillStyle = "rgb(255, 255, 255, 0.5)";
  context.fill();
  context.lineWidth=3;
  context.strokeStyle="gold";
  context.closePath();
  context.stroke();

  //Draad links
  context.beginPath();
  context.moveTo(130,210);
  context.lineTo(130,350);
  context.lineWidth=3;
  context.strokeStyle="gold";
  context.closePath();
  context.stroke();
}, waitSecs + 3500);

//Hat
setTimeout(function hat(){
  context.beginPath();
  context.lineWidth=1;
  context.strokeStyle= "black";
  context.fillStyle = "brown";
  context.fillRect(100,110,200,20);
  context.closePath();
  context.strokeRect(100, 110, 200, 20);

  context.beginPath();
  context.arc(200,110,70,1*Math.PI,0);
  context.fillStyle = "brown";
  context.fill();
  context.closePath();
  context.stroke();
}, waitSecs + 4000);
