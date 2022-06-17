// player 1 random image
var randomNumber1 =Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage="dice" + randomNumber1+ ".png"; //dice1.png-dice6.png

var randomImageSource="images/"+randomDiceImage; //images/dice1.png-//images/dice6.png

var image1=document.querySelectorAll('img')[0];
image1.setAttribute("src",randomImageSource);

// player 2 random image
var randomNumber2 =Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage2="dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

var randomImageSource2="images/"+randomDiceImage2; //images/dice1.png-//images/dice6.png

var image2=document.querySelectorAll('img')[1];
image2.setAttribute("src",randomImageSource2);


//check winner
//if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}

//if player 2 wins
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!";
}

//if match draw
else{
  document.querySelector("h1").innerHTML="Draw!";
}
