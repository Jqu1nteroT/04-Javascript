//JavaScript

var myArray = new Array (4);

for (var i=0;i<myArray.length;i++){

	myArray[i] = prompt("Dit moi un mot: ");

}

for (var i = 0; i<4; i++){

	var tall = Math.floor(Math.random() * myArray.length);
	document.write(myArray[tall] +"<br>");
	myArray.splice(tall,1);
	
}