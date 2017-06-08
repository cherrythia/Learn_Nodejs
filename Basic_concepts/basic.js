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