var Bucky = {
	printFirstName: function() {
		console.log('name is bucky');
		console.log(this === Bucky); //true, because Bucky is calling it.
	}
};

Bucky.printFirstName();

//default calling context is global
function doSomethingUseless() {
	console.log('\n I am worthless');
	console.log(this === global); //calling context is not bucky.
}

doSomethingUseless();