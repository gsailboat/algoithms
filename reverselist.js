// var reverseList = function(head) {
//   let prev = null;
//   let cur = head;
//   while (cur) {
//     const next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
  
//   return prev;
// };

// console.log(reverseList([1,2,3,4,5]));

class Node{
  constructor(val, next = null){
    this.val = val
    this.next = next
  }
}

const reverseLinkedList = function(root){
  let cur = root
  let prev = null
  while(cur != null){
    let next = cur.next
    cur.next = prev
    console.log("before", prev);
    prev = cur
    console.log("after", cur);
    cur = next
    console.log(cur);
    //console.log(prev);
  }
  return prev
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

let res = reverseLinkedList(n1)
while(res != null){
  //console.log(res.val)
  res = res.next
}

// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }

// var reverseList = function(head) {
// 	console.log(head);
// 	if (!head)
// 		return null;
//     if(!head.next){
//     	//console.log('here');
//     	return head;
//     }
//     let stack = [];
//     let rev = new ListNode(0);
//     rev.next = head;
//     let current = rev.next;
//     while(head) {
//         stack.push(head.val);
//         head = head.next;
//     }
//     while(current) {
//         current.val = stack.pop();
//         current = current.next;
//     }
//     console.log(current)
//     console.log(rev.next);
//     return rev.next;
// };

//console.log(reverseList([1->2->3->4->5->NULL]));