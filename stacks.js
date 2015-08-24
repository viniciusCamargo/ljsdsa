function Stack() {

	var items = [];

	this.push = function(element) {
		items.push(element);
	};

	this.pop = function() {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length-1];
	};

	this.isEmpty = function() {
		return items.length == 0;
	};

	this.size = function() {
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	}

}

var stack = new Stack();

// console.log(stack.isEmpty()); // true
// stack.push(5);
// stack.push(8);
// console.log(stack.isEmpty()); // false
// console.log(stack.peek()); // 8
// stack.push(11);
// console.log(stack.size()); // 3
// stack.push(15);
// console.log(stack.size()); // 4
// stack.print(); // 5, 8, 11, 15

// //
// //														 - top -
// //
// //														   15
// //												 11	   11
// //										8		 8		 8
// //		empty stack 		5		 5		 5
// //
// //														 - base -
// //

// stack.pop();
// stack.pop();
// console.log(stack.size()); // 2
// stack.print(); // 5, 8

// //
// //								  - top -
// //
// //										15		pop()
// //										11	 					11		pop()
// //										8		 					8		 					8
// //		empty stack 		5		 					5		 					5
// //
// //									- base -
// //

// /////////////////// Decimal to binary
// function divideBy2(decNumber) {

// 	var remStack = new Stack(),
// 			rem,
// 			binaryString = '';

// 	while (decNumber > 0) { // {1}
// 		rem = Math.floor(decNumber % 2); // {2}
// 		remStack.push(rem);
// 		decNumber = Math.floor(decNumber / 2); // {4}
// 	}

// 	while (!remStack.isEmpty()) { // {5}
// 		binaryString += remStack.pop().toString();
// 	}

// 	return binaryString;

// }

// til pg 116 