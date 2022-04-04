
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6



document.querySelectorAll("img")[0].setAttribute("src", "dice" + randomNumber1 + ".png");


var randomNumber2 = Math.floor(Math.random() * 6) + 1;



document.querySelectorAll("img")[1].setAttribute("src", "dice" + randomNumber2 + ".png");


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML =  "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
