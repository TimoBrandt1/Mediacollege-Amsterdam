console.log(window.innerWidth);
console.log(window.innerHeight);
let imageNames = ["Ragdoll.jpg", "AmericanShorthair.jpg", "Bengal.jpg" ,"BritishBlue.jpg", "BritishShorthair.jpg", "Burmese.jpg", "MaineCoon.jpg" , "Munchkin.jpg", "RussianBlue.jpg", "Spacecat.jpg"];
let tumbs = document.getElementById('tumbs');
let tdisplay = document.getElementById('display');

let up = document.getElementById('up');
let right = document.getElementById('right');
let down = document.getElementById('down');
let left = document.getElementById('left');

selectImage(Math.floor(Math.random()*imageNames.length));

for(let i= 0; i<imageNames.length; i++){
  let tumb = new Image()

  tumb.src ="img/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click", function(e){
    selectImage(e.target.id);
  });
}

function selectImage(id){
  display.src = "img/big/" + imageNames[id];
  currentImage = id;
  console.log(currentImage);

  document.getElementById("rightImage").onclick = function rightImage(){
    if(id >= 9){
      id = 0;
      display.src = "img/big/" + imageNames[id];
    }
    else{
      currentImage[id] = id++;
      display.src = "img/big/" + imageNames[id];
    }
  }
  document.getElementById("leftImage").onclick = function leftImage(){
    if(id <= 0){
      id = 9;
      display.src = "img/big/" + imageNames[id];
    }
    else{
    currentImage[id] = id--;
    display.src = "img/big/" + imageNames[id];
  }
  }
  document.getElementById("upImage").onclick = function upImage(){
    if(id == 0){
      id = 5;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 1){
      id = 6;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 2){
      id = 7;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 3){
      id = 8;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 4){
      id = 9;
      display.src = "img/big/" + imageNames[id];
    }
    else{
    currentImage[id] = id;
    id = id - 5;
    display.src = "img/big/" + imageNames[id];
    }
  }
  document.getElementById("downImage").onclick = function downImage(){
    //if(currentImage -5 <0)
    if(id == 5){
      id = 0;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 6){
      id = 1;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 7){
      id = 2;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 8){
      id = 3;
      display.src = "img/big/" + imageNames[id];
    }
    else if(id == 9){
      id = 4;
      display.src = "img/big/" + imageNames[id];
    }
    else{
    currentImage[id] = id;
    id = id + 5;
    display.src = "img/big/" + imageNames[id];
    }
  }
}
