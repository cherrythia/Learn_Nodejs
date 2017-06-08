var person = {
			firstName: "bucky",
			lastName: "lim",
			age: 28
				};

console.log(person);

function addNum (a,b) {
	return a + b;
}

console.log("total num" + addNum(10,11));

var printBacon = function() {
	console.log('Bacon is healthy, do not have to eat medicine.');
}

printBacon();

setTimeout(printBacon, 5000);

//concept of referencing objects
var john = person;
john.firstName = "john"

console.log('john firstName',john.firstName);
console.log('person firstName',person.firstName); //replaced because is by reference

console.log(19 == '19'); //compare value only, return true
console.log(19 === '19'); //compare value and reference, return false