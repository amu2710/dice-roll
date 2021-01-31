var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdice1 = "dice/dice" + randomnumber1 + ".JPG";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice2 = "dice/dice" + randomnumber2 + ".JPG";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);

if (randomdice1 === randomdice2){
  document.querySelector("h1").innerHTML = "Draw Match"
}

if (randomdice1 > randomdice2){
  document.querySelector("h1").innerHTML = "Player1 Wins"
}

if (randomdice1 < randomdice2){
  document.querySelector("h1").innerHTML = "Player2 Wins"
}
