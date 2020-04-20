function LinkedList() {
	let length = 0;
	let head = null;

	let Node = function(value) {
		this.val = value;
		this.next = null;
	}

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
}

function BinaryTree() {
	let length = 0;
	let head = null;
	let level = 0;

	let TreeNode = function(name) {
		this.val = name;
		this.right = null;
		this.left = null;
	}

	this.head = function() {
		return head;
	}

	this.size = function() {
		return length;
	}

	this.minimalTree = function(arr) {
		let middle;

		if (arr.length === 0)
			return null;
		length++;
		if (arr.length % 2 === 0)
			middle = arr.length / 2;
		else
			middle = (arr.length - 1) / 2;
		let curr = new TreeNode(arr[middle]);
		let min = arr.slice(0, middle);
		let max = arr.slice(middle + 1);

		curr.left = this.minimalTree(min);
		curr.right = this.minimalTree(max);

		return curr;
	}

	this.bfsArray = function(tree) {
		let answer = [];
		let curr = new LinkedList();

		if (tree.val) {
			curr.add(tree);
		}
		while(curr.size() > 0) {
			console.log(curr.size());
			answer.push(curr);

			parents = new TreeNode(curr);
			for (parent in parents) {
				if (parent.left != null)
					curr.add(parent.left);
				if (parent.right != null)
					curr.add(parent.right)
			}
		}
		return answer;
	}

	this.getHeight = function(parent) {
		console.log("first", parent);
		if (parent === null)
			return -1;
		// console.log("first", parent.val);
		console.log(this.getHeight(parent.left), this.getHeight(parent.right) + 1);
		return Math.max((this.getHeight(parent.left), this.getHeight(parent.right)) + 1);
	}

	this.binaryBalance = function(tree) {
		// console.log(tree);
		if (tree === null)
			return true;

		let l = this.getHeight(tree.left)
		let r = this.getHeight(tree.right);

		if (Math.abs(l - r) > 1)
			return false;
		return this.binaryBalance(tree.left) && this.binaryBalance(tree.right);
	}

	const pop = TreeNode {
		val: 3,
		  right:
		   TreeNode {
		     val: 5,
		     right: null,
		     left: TreeNode {
		     	val: 4,
		     	right: TreeNode {val 2, right: null, left: null },
		     	left: null
		     },
		  left:
		   TreeNode {
		     val: 1,
		     right: TreeNode { val: 2, right: null, left: null },
		     left: TreeNode { val: 0, right: null, left: null } } }
}

	let test = new BinaryTree();
	let tree = test.minimalTree([0,1,2,3,4,5]);
	console.log(test);
	console.log(test.size());
	console.log(test.binaryBalance(tree));


	// console.log(test.minimalTree([0,1,2,3,4]));
	// console.log(test.bfsArray(tree));
