var RandomNumber1=Math.floor(Math.random()*6)+1; 
var RandomDiceImage1="dice"+RandomNumber1+".png";
var RandomImageSource1="images/"+RandomDiceImage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource1);

var RandomNumber2=Math.floor(Math.random()*6)+1; 
var RandomDiceImage2="dice"+RandomNumber2+".png";
var RandomImageSource2="images/"+RandomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomImageSource2);

if(RandomNumber1>RandomNumber2)
{
document.querySelectorAll("h1").innerHTML="Player 1 wins";
}
else if(RandomNumber1==RandomNumber2)
{
    document.querySelectorAll("h1").innerHTML="Draw";

}
else{
    document.querySelectorAll("h1").innerHTML="Player 2 wins";

}