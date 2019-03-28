const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let lives = 10;
let score = 0;

function flipCard(){
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.toggle('flip');

  if(!hasFlippedCard){
    //First click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
    //Second Click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards(){
  //If the cards are the same it removes the flip function
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  addScore();
  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  //If the cards are not the same
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    removeLive()
    resetBoard();
  },1000);
}

function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function addScore(){
  score += 1;
  document.getElementById("score").innerHTML = score ;
  if(score === 6){
    window.location.href = "../win/win.html";
  }
}

function removeLive(){
  lives -= 1;
  document.getElementById("lives").innerHTML = lives ;
  if(lives === 0){
    window.location.href = "../lose/lose.html";
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));
