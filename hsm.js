var randno1;
randno1 = Math.floor(Math.random() * 6) + 1;
var dimg;
dimg = "./images/" + "dice" + randno1 + ".png"
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", dimg)

var randno2;
randno2 = Math.floor(Math.random() * 6) + 1;
var dimg2;
dimg2 = "./images/" + "dice" + randno2 + ".png"
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", dimg2)

if (randno1 > randno2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randno1 < randno2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw"
}
