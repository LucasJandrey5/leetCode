/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let sum = 0;
  let carry = 0;
  let l3 = new ListNode(0);
  let head: ListNode = l3;

  while (l1 || l2) {
    sum = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;
    carry = Math.floor(sum / 10);
    if (carry) sum %= 10;

    l3.next = new ListNode(sum);
    l3 = l3.next;
  }

  if (carry !== 0) {
    l3.next = new ListNode(carry);
  }

  return head.next;
}

const ArrayToListNode = (ar: number[]): ListNode => {
  const nodes = ar.map((item) => new ListNode(item));
  return nodes.reduceRight(AddNext);
};

const AddNext = (acc: ListNode, curr: ListNode) => {
  curr.next = acc;
  return curr;
};
// let a = ArrayToListNode([
//   1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 1,
// ]);

// console.log(a);
// let b = ArrayToListNode([5, 6, 4]);

let a = new ListNode(2, { val: 4, next: { val: 3, next: null } });
let b = new ListNode(5, { val: 6, next: { val: 4, next: null } });
console.log(addTwoNumbers(a, b));
