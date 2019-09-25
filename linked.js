function LinkedList() {
	var length = 0;
	var head = null;

	var Node = function(element){
		this.element = element;
		this.next = null;
	};

	this.size = function(){
		return length;
	};

	this.head = function(){
		return head;
	};

	this.add = function(element){
		var node = new Node(element);
		if(head === null)
			head = node;
		else {
			var currentNode = head;

			while(currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		length++;
		// console.log(head);
	};


	this.remove = function(element) {
		var currentNode = head;
		var previousNode;
		if (currentNode.element === element)
			head = currentNode.next;
		else {
			while (currentNode.element !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.indexOf = function(element) {
		var currentNode = head;
		var index = -1;

		while (currentNode) {
			index++;
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}
		return -1;
	};

	this.elementAt = function(index) {
		var currentNode = head;
		var count = 0;
		while (count < index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.element;
	};

	this.addAt = function(index, element) {
		var node = new Node(element);

		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index > length) {
			return false;
		}
		if (index === 0) {
			node.next = currentNode;
			head = node;
		}
		else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	}

	this.removeAt = function(index, element) {
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index < 0 || index >= length) {
			return null;
		}
		if (index === 0)
			head = currentNode;
		else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	}

	this.removeDups = function() {
		let current = head;
		let run;
		// console.log(head);
		while (current) {
			if (current.next)
				run = current;

			while (run.next) {
				if (run.next.element === current.element) {
					run.next = run.next.next;
					length--;
				}
				else
					run = run.next;
			}
			current = current.next;
		}
		// head = current;
		// console.log(head);
	}

	this.nthtoLast = function(k) {
		let one = head;

		for (i = 0; i < k; i++)
			one = one.next;
		let two = head;

		while (one) {
			one = one.next;
			two = two.next;
		}
		return two.element;
	}

	// this.deleteMiddle = function(node) {
	// 	let start = node;
	// 	// for (i = 0; start.next.next; i++) {
	// 	if (start === null || start.next === null)
	// 		return false;
	// 	if (start.next.next) {
	// 		start.next = start.next.next;
	// 		start.element = start.next.element;
	// 		length--;
	// 	}
	// 	return true;
	// }

	this.partition = function(value) {
		let start = head;
		let lower = null;
		let higher = null;

		console.log(start);
		while (start) {
			let current = new Node(start.element);

			if (start.element < value) {
				if (!lower)
					lower = current;
				else {
					while(lower.next)
						lower = lower.next;
					lower.next = current;
				}
			}
			else {
				if (!higher)
					higher = current
				else {
					while(higher.next)
						higher = higher.next;
					higher.next = current;
				}
			}
			start = start.next;
		}
		console.log("lower", lower);
		console.log("higher", higher);
		while(lower.next){
			// console.log(lower);
			lower = lower.next;
		}
		// console.log(lower);
		lower.next = higher;
		head = lower;
		// console.log(head);
	}
}

var conga = new LinkedList();
conga.add(1);
//console.log(conga);
conga.add(1);
// conga.add(2);
// console.log(conga);
// console.log(conga.head)
//console.log(conga.indexOf('Puppy'));
// conga.add(2);
conga.add(5);
conga.add(3);
conga.partition(2);
console.log(conga.head());
// console.log("One", conga.size());
// console.log("One", conga.head());
conga.removeDups();
// console.log(3, conga.size());
// console.log(3, conga.head());
// console.log(1, conga.nthtoLast(2));
// conga.deleteMiddle(8);
// console.log(2, conga.head());
// console.log(2, conga.size());
// conga.partition(2)
//console.log(conga.size());
//console.log(conga.removeAt(2));
//console.log(conga.size());

