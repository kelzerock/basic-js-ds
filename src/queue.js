const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.dataQueue = [];
  }

  getUnderlyingList() {
    return {value: this.dataQueue[0], next: this.findData(1)};
  }

  findData(n) {
    if (this.dataQueue[n]) {
      return {value: this.dataQueue[n], next: this.findData(n + 1)}
    } else {
      return null;
    }
  }

  enqueue(value) {
    this.dataQueue.push(value);
  }

  dequeue() {
    return this.dataQueue.shift();
  }
}

module.exports = {
  Queue
};
