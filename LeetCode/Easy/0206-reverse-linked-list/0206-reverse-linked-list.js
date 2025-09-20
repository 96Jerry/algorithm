/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) {
        return head
    }

    const init = new ListNode()
    init.val = head.val
    init.next = null

    let next = head.next
    let prev = init
    let cur = init
    while (next) {
        cur = new ListNode()
        cur.val = next.val
        cur.next = prev
 
        prev = cur
        next = next.next
    }

    return cur
};