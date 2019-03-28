const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');

let currentLocation = 4;
let key;
let inventorySystem = [];

let locations = [];
locations[0] = "Reindeer Barn";
locations[1] = "Kitchen";
locations[2] = "Academy";
locations[3] = "Mailroom";
locations[4] = "Santas Den";
locations[5] = "Clubhouse";
locations[6] = "Giftshop";
locations[7] = "Workshop";
locations[8] = "Cottage";

images = [];
images[0] = "reindeerBarn.png";
images[1] = "kitchen.png";
images[2] = "academy.png";
images[3] = "mailroom.png";
images[4] = "santasDen.png";
images[5] = "clubhouse.png";
images[6] = "giftshop.png";
images[7] = "workshop.png";
images[8] = "cottage.png";

directions = [];
directions[0] = ["down", "right"];
directions[1] = ["left", "down"];
directions[2] = ["down"];
directions[3] = ["down","right","up"];
directions[4] = ["up","left","down"];
directions[5] = ["use key", "down"];
directions[6] = ["grab key", "up"];
directions[7] = ["right", "up",];
directions[8] = ["up", "left"];

descriptions = [];
descriptions[0] = "You are in the reindeer barn. This is the place where the reindeers live.";
descriptions[1] = "You are in the kitchen. Mrs. Claus makes the delicious food here for Santa Claus and the elves";
descriptions[2] = "You found the the lost christmas bag! Congratulations now Santa can deliver the presents and you can finaly rest";
descriptions[3] = "You are in the mailroom. Here you can send letters to your fellow elfs!";
descriptions[4] = "Santa lost his bag full of presents, help him find it by exploring different rooms!";
descriptions[5] = "You are in the clubhouse. Here the elves relax and play games.";
descriptions[6] = "You are in the giftsohop. Here you can buy gifts for other elves.";
descriptions[7] = "You are in the workshop. This is the place all the presents are made for christmas.";
descriptions[8] = "You are in a small cottage.";

myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "go") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "up":
            currentLocation -= 3;
            break;
          case "down":
            currentLocation += 3;
            break;
          case "right":
            currentLocation += 1;
            break;
          case "left":
            currentLocation -= 1;
            break;
        }
      } else {
        feedback.innerHTML = "You cant do that";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      // Clears the input for new input
      myInput.value = "";
    }

    if (inputArray[0] == "grab") {
      if ((inputArray[1]) != -1) {

        switch (inputArray[1]) {
          case "key" :
          if(currentLocation == 6){
            inventorySystem.push("🔑");
            myInventory.innerHTML = "Your inventory: " + inventorySystem;
            key = 1;
            break;
          }
          if (key == 1) {
            myInput.value = "";
          }
          else{
            feedback.innerHTML = "The key is not here!";
            feedback.style.backgroundColor = "yellow";
            setTimeout(removeFeedback, 2000);
            break;
          }
        }
      }
      else {
        feedback.innerHTML = "You can not do that";
        setTimeout(removeFeedback, 2000);
      }
      // Gets the current location
      giveLocation();
      // Clears the input for new input
      myInput.value = "";
    }

    if (inputArray[0] == "use"){
      switch (inputArray[1]) {
        case "key" :
        if (key == 1){
          // Sets the variable won to 1 so you win the game
          currentLocation -= 3;
          giveLocation();
          feedback.innerHTML = "YOU HAVE WON!";
          input.innerHTML = "";
          possibilities.innerHTML = "";
          inventory.innerHTML = "";
          break;
        }
        else{
          // Gives the player feedback
          feedback.innerHTML = "You do not have the key!";
          // Feedback background color
          feedback.style.backgroundColor = "yellow";
          setTimeout(removeFeedback, 2000);
          break;
        }
      }
      // Clears the input for new input
      myInput.value = "";
    }

    if (inputArray[0] != "go" && inputArray[0] != "grab" && inputArray[0] != "use" ){
      feedback.innerHTML = "Posible inputs are: go, grab, use and help.";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "img/" + images[currentLocation];
  myDirections = "Posible actions are: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
}

function removeFeedback() {
  // Clears the input for new input
  feedback.innerHTML = "";
}

giveLocation();
