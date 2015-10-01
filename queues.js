function Queue() {
	var items = [];

	this.enqueue = function(element) {
		items.push(element);
	};
	this.dequeue = function() {
		return items.shift();
	};
	this.front = function() {
		return items[0];
	};
	this.isEmpty = function() {
		return items.length == 0;
	};
	this.size = function() {
		return items.length;
	};
	this.print = function() {
		console.log(items.toString());
	}
}

// var queue = new Queue();
// console.log(queue.isEmpty()); // true
// queue.enqueue("John");
// queue.enqueue("Jack");
// queue.enqueue("Camila");
// queue.print(); // John,Jack,Camila
// console.log(queue.size()); // 3
// console.log(queue.isEmpty()); // false
// queue.dequeue();
// queue.dequeue();
// queue.print(); // Camila

// /////////////////// Priority queue
function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for (var i=0; i<items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
			if (!added) {
				items.push(queueElement);
			}
		}
	};
	this.dequeue = function() {
		return items.shift();
	};
	this.front = function() {
		return items[0];
	};
	this.isEmpty = function() {
		return items.length == 0;
	};
	this.size = function() {
		return items.length;
	};
	this.print = function() {
		console.log(items.toString());
	}
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
// priorityQueue.print();


// // The circular queue – Hot Potato

function hotPotato (nameList, num) {
	var queue = new Queue();

	for (var i=0; i<nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while (queue.size() > 1) {
		for (var i=0; i<num; i++) {
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated + ' was eliminated from the Hot Potato game.');
	}

	return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// var winner = hotPotato(names, 7);
// console.log('The winner is ' + winner);

