//Player1
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
var stringValue=Math.floor(randomNumber1)+1;
var modifiedStringValue="images/dice" + stringValue +".png";
document.querySelector(".img1").setAttribute("src", modifiedStringValue);

//Player2
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
var stringValue=Math.floor(randomNumber2)+1;
var modifiedStringValue="images/dice" + stringValue +".png";
document.querySelector(".img2").setAttribute("src", modifiedStringValue);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
    document.querySelector("h1").style.fontSize="5rem";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    document.querySelector("h1").style.fontSize="5rem";
}
else
{
    document.querySelector("h1").innerHTML="Its a draw";
    document.querySelector("h1").style.fontSize="5rem";
}