function placeAnOrder(orderNumber) {
	console.log("Customer place an order", orderNumber);

	cookAndDeliveryFood(function () {		//function can be placed as parameter
		console.log('Delivered food order',orderNumber);
	});
}

//simulate a 5 secs operation
function cookAndDeliveryFood(callback) {
	setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);

