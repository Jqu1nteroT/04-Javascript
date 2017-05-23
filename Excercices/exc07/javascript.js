talla = prompt("Insert votre pointure: ")

anne = prompt("Insert votre annee de naissance: ")

mult = parseInt(talla) * 2;

aju = parseInt(mult) + 5;

mult2 = parseInt(aju) * 50;

rest = parseInt(mult2) - parseInt(anne);

total = parseInt(rest) + 1766;

alert("tout c\'est: "+total);