//https://leetcode.com/problems/merge-k-sorted-lists/submissions/
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let len = lists.length;
  if (len === 0) return null;

  while (len > 1) {
    for (let i = 0; i < Math.floor(len / 2); i++) {
      lists[i] = merge2Lists(lists[i], lists[len - i - 1]);
    }

    len = Math.floor((len + 1) / 2);
  }

  return lists[0];
}

function merge2Lists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val <= l2.val) {
    l1.next = merge2Lists(l1.next, l2);
    return l1;
  } else {
    l2.next = merge2Lists(l1, l2.next);
    return l2;
  }
}
