// scripts.js
/*
var name = prompt('Enter your name');
// teraz wyświetli się funkcja alert
alert('Hello, ' + name);
console.log('Hello, ' + name);

/*
var foo = 'lorem' + 'Ipsum';
foo = 'lorem' + ['1', 2, 3.4];     // 'lorem1, 2, 3.4'
foo = ['1', 2, 3.4] + 'lorem';     // '1,2,3.4lorem'
foo = 9 + ['1', 2, 3.4];             // '91,2,3.4'
foo = ['1', 2, 3.4] + 9;             // '1,2,3.49'
foo = ['1', 2, 3.4] + [1, '2', 3.4];  // '1,2,3.41,2,3.4'

foo = ['1', 2, 3.4] + {bar: 'lorem'}; // 1, 2, 3.4 [object Object]
foo = {bar: 'lorem'} + [1, '2', 3.4]; // [object Object] 1, 2, 3.4

foo = ['1', 2, 3.4] + undefined; // 1, 2, 3.4 undefined
*/
/* var points = 1;
alert('Wartość to, ' + points)
console.log( 'The current value of points is: ', points ); // Wartość to 1
console.log( 'The current value of points is: ', points++ ); // Wartość 1 a nstępnie wzrasta
console.log( 'The current value of points is: ', points ); // Wartość to 2
*/
/*
var a = prompt("Enter value a of triangle");
var h = prompt("Enter value h of triangle");
var triangleArea = a*h/2;
alert(triangleArea);
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
*/
/*
var a = prompt("Wprowadź zmienną 'a'");
var b = prompt("Wprowadź zmienną 'b'");
var value = (a*a)-(2*a*b)+(b*b);
console.log("Wynik to: ", value);
if (value>0) {
	console.log("Wynik dodatni");
} else if (value<0) {
	console.log("Wynik ujemny");
} else {
	console.log("Wynik równa się zero");
}

*/
/*
var a = prompt("Wprowadź zmienną 'a'");
var h = prompt("Wprowadź zmienną 'h'");

	function getTriangleArea(a, h) {
		if ((a<=0) || (h<=0)) {
			alert("Nieprawidłowe dane");
			console.log("Nieprawidłowe dane");
		} else {
			return (a*h/2);
		}
	}
console.log(getTriangleArea(a, h));	
var triangle1Area = console.log(getTriangleArea(10, 6));
var triangle2Area = console.log(getTriangleArea(1, 2));
var triangle3Area = console.log(getTriangleArea(2, 2));
*/
/*
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = prompt("Wprowadź imię");

if (allNames.indexOf(newName) === -1) {
	//allNames[allNames.length + 1] = neWName;
	allNames.push(newName);
	console.log(allNames);
} else {
	console.log("Wprowadź inne imię");
}
*/

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
console.log(text);
var dinosaur = "triceraptops";
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var text = text.replace("Velociraptor", dinosaurUpperCased);

console.log(text);
console.log(text.length/2);
console.log(text.slice(0,73));



/*function getTree (x) {
	for (var i=0; i<=x; i++) {
		var star="";
		for (var j=x; j>i; j--){
			star +=" ";
		}
		for (var k=0; k<=i; k++) {
			star +="*";
		}
		for (var l=0; l<=i; l++) {
			star +="*";
		}
		console.log(star);
	}
}

getTree(5);
*/