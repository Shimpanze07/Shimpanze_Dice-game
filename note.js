var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

var player_1 = document.getElementById("score-0").textContent = 0;
var player_2 = document.getElementById("score-1").textContent = 0;
var currPlayer_1 = document.getElementById("current-0").textContent = 0;
var currPlayer_2 = document.getElementById("current-1").textContent = 0;

document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');

var dice = document.getElementById('dice1');

document.querySelector(".btn-roll").addEventListener("click", function() {

  var diceNumber = Math.floor(Math.random() * 6) + 1;

    for (var i = 1; i <= 6; i++) {
      dice.classList.remove('show-' + i);
      if (diceNumber === i) {
        dice.classList.add('show-' + i);
      }
    }
    roundScore+=diceNumber;
    console.log(diceNumber);

    if(diceNumber !== 1){
      document.getElementById("score-"+activePlayer).textContent = roundScore;
  
    } else {
      document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
      roundScore = 0;
      document.getElementById("score-"+activePlayer).textContent = roundScore;
  
      if(activePlayer === 1 ){
        activePlayer = 0;
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
      }else{
        activePlayer = 1;
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
      }
  
    };
});
document.querySelector(".btn-hold").addEventListener("click", function(){

  document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');

    scores[activePlayer]+=roundScore;
    document.getElementById("current-"+activePlayer).textContent = +scores[activePlayer];
    roundScore = 0;
    document.getElementById("score-"+activePlayer).textContent = roundScore;
    
    if(activePlayer===1){
      activePlayer=0;
      document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    
    }else{ 
      activePlayer=1;
      document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    }
  });
  
  document.querySelector(".btn-new").addEventListener("click", function(){
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
    scores[0] = 0;
    scores[1] = 0;
    activePlayer = 0;
    roundScore = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    diceDom.style.display = "none";
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
  });