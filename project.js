var a= Math.floor((Math.random()*6)+1);
var b= Math.floor((Math.random()*6)+1);
document.document.getElementsByClassName("img1")[0].setAttribute("src","dice"+a+".png");
document.document.getElementsByClassName("img2")[1].setAttribute("src","dice"+b+".png");

if(a>b){
    document.querySelector("h1").innerHTML("player 1 WIN 🥇");
}
if(a<b){
    document.querySelector("h1").innerHTML("player 2 WIN 🥇");
}
if(a==b){
    document.querySelector("h1").innerHTML("Draw 🤔");
}
