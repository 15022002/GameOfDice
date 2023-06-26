var randomNumber1=(Math.floor(Math.random()*6))+1;

var randomImageSource1="dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
var randomNumber2=(Math.floor(Math.random()*6))+1;

var randomImageSource2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

var player1=prompt("Enter the name of the first player");
var player2=prompt("Enter the name of the second player");
document.querySelectorAll("p")[0].textContent=player1;
document.querySelectorAll("p")[1].textContent=player2;

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="😀 "+player1 + " Wins ";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent=player2+" Wins 😀 ";
}
else
{
  document.querySelector("h1").textContent="Draw";
}
