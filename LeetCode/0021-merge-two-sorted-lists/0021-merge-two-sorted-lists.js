/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    var convertToArray = function (linkedList) {
        const array = []

        while (linkedList?.next !== undefined) {
            array.push(linkedList.val)
            linkedList = linkedList.next
        }

        return array
    }

    var convertToLinkedList = function (array) {
        if (array.length === 0) return null;

        const head = new ListNode(array[0]);
        let current = head;

        for (let i = 1; i < array.length; i++) {
            current.next = new ListNode(array[i]);
            current = current.next;
        }

        return head;
    }

     list1 = convertToArray(list1)
    list2 = convertToArray(list2)
    const mergedArray = [...list1, ...list2].sort((a, b) => a - b)

    return convertToLinkedList(mergedArray)
};