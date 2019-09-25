function ListNode(val, next) {
	this.val = val;
	this.next = next;
}

var deleteDups = function(head) {
	let current = head;
	// console.log(head);

	while (current != null) {
		let run = current;
		while (run.next != null) {
			if (run.next.val == current.val) {
				run.next = run.next.next
			}
			else
				run = run.next;
		}
		current = current.next;
	}
	console.log(current);
}

console.log(deleteDups(ListNode(1, ListNode(2, ListNode(3, ListNode(2, ListNode(1, null)))))));