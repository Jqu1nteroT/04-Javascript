function forma(){

var a = document.getElementById("pointure").value;

var b = document.getElementById("annee").value;

mult = parseInt(a) * 2;

aju = parseInt(mult) + 5;

mult2 = parseInt(aju) * 50;

rest = parseInt(mult2) - parseInt(b);

total = parseInt(rest) + 1766;

alert("tout c\'est: "+total);
}