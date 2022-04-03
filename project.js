var a= Math .floor(Math.random()*6);
var b= Math .floor(Math.random()*6);
document.querySelector("img")[0].setAttribute("src","dice"+a+".png");
document.querySelector("img")[1].setAttribute("src","dice"+b+".png");

if(a>b){
    document.querySelector("h1") .innerHTML("player 1 WIN");
}
if(a<b){
    document.querySelector("h1") .innerHTML("player 2 WIN");
}
if(a==b){
    document.querySelector("h1") .innerHTML("Draw");
}
