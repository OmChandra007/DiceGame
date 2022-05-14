var randomNumber1 = Math.floor(Math.random() * 6) + 1; // we will get random numbers between 1-6 here

// below we are concatinating our randomNumber1 value with our random dice iamges

var randomDiceImage = "dice" + randomNumber1 + ".png"; // we are gating here images between dice1.png to dice6.png

// And now we have to concatinate the source of the iamge as well with our random images.

var randomImageSource = "images/" + randomDiceImage; // here we are gatting our random images with sources /images/dice1.png - /images/dice6.png

// we have to change the source attribute from static iamges to random images.

var image1 = document.querySelectorAll("img")[0]; // here we are sellectingour images based on their positions.

// lets change the image source.  By set attribute.

image1.setAttribute("src", randomImageSource); // we have changed source attribute here.


// Similarly will work for second image or second player.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // here we are combining images along with here souces.
//changing source image from static to dinamic or we can say random.

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
}
// if player 2 wins.
else if (randomNumber2 > randomNumber1) {

  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
// if they both equals.
else{
  document.querySelector("h1").innerHTML = "Drow!"
}
