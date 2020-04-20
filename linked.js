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
		let lowerStart = null;
		let higher = null;
		let higherStart = null;

		while (start) {
			let current = new Node(start.element);

			if (start.element < value) {
				if (!lowerStart){
					lowerStart = current;
					lower = lowerStart;
				}
				else {
					lower.next = current;
					lower = current;
				}
			}
			else {
				if (!higher) {
					higherStart = current;
					higher = higherStart;
				}
				else {
					higher.next = start;
					higher = start;
				}
			}
			start = start.next;
		}
		if (lowerStart === null)
			head = higherStart;
		else {
			lower.next = higherStart;
			head = lowerStart;
		}
	}

	this.sumlists = function(other) {
		let answer = 0;
		let startone = head;
		let starttwo = other;
		let sum = null;
		let current = null;

		while (startone || startwo) {
			if (!startone) {
				answer += starttwo.element;
			}
			else if (!starttwo)
				answer += startone.element;
			else
				answer += startone.element + starttwo.element;
			let current = new Node(answer % 10);
			if (!sum)
				sum = current;
			startone = startone.next ? startone.next : null;
			starttwo = starttwo.next ? starttwo.next : null;


		}
		return answer;
	}

	this.palindrome = function() {
		let start = head;
		let run = head;
		let stack = [];

		while(run !== null && run.next !== null) {
			stack.push(start.element);
			start = start.next;
			run = run.next.next;
		}

		if (run !== null){
			start = start.next;
		}

		while (start !== null) {
			if (stack[stack.length - 1] !== start.element)
				return false;
			start = start.next;
			stack.pop();
		}
		return true;
	}

	// this.intersection = function(two) {
	// 	let start = head;
	// 	console.log(length, two.size());

	// 	while (start)
	// 		start = start.next;
	// 	while ()
	// 	if (length > two.size())
	// 		for (i = 0; i < length - two.size; i++) {
	// 			start = start.next;
	// 		}

	// }
}

var conga = new LinkedList();
var tango = new LinkedList();
conga.add(2);
conga.add(2);
conga.add(1);
conga.add(2);
conga.add(2);
tango.add(1);
tango.add(2);
tango.add(2);
console.log(conga.head());
// console.log(conga.intersection(tango))
console.log(conga.palindrome());
// console.log(conga.head());

// conga.partition(2);
// console.log(conga.palindrome());
// console.log(conga.head());
// console.log("One", conga.size());
// console.log("One", conga.head());
// conga.removeDups();
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

