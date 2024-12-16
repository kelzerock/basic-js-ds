const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

ListNode.prototype.add = function(x){
  if(!this.value) {
    this.value = x
  } else {
    let node = this
    while(node.next){
      node = node.next
    }
    let newNode = new ListNode(x)
    node.next = newNode;
  }
}

function removeKFromList(l, k) {
  let filteredList = new ListNode();
  while(l.next){
    if (l.value !== k) filteredList.add(l.value);
    l = l.next;
    if (!l.next && l.value !== k) filteredList.add(l.value);
  }
  
  return filteredList;
}

module.exports = {
  removeKFromList
};
