const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(x) {
    this.node = new Node(x);
  }

  root() {
    return this.node.data || null;
  }

  add(data) {
    if (!this.node.data) this.node = new Node(data);
    let queue = [this.node];
    while (queue.length > 0) {
      let curNode = queue.shift();
      if (data > curNode.data) {
        if (curNode.right) {
          queue.push(curNode.right);
        } else {
          curNode.right = new Node(data);
        }
      } else if (data < curNode.data) {
        if (curNode.left) {
          queue.push(curNode.left);
        } else {
          curNode.left = new Node(data);
        }
      } else {
        curNode.data = data;
      }
    }
  }

  has(data) {
    if (!this.node.data) return false;
    let queue = [this.node];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log({ currentNode });
      if (currentNode.data === data) return true;
      if (data > currentNode.data) {
        if (currentNode.right) queue.push(currentNode.right);
      } else {
        if (currentNode.left) queue.push(currentNode.left);
      }
    }
    return false;
  }

  find(data) {
    if (!this.node.data) return null;
    let queue = [this.node];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode.data === data) {
        return currentNode;
      } else {
        if (data > currentNode.data) {
          if (currentNode.right) queue.push(currentNode.right);
        } else {
          if (currentNode.left) queue.push(currentNode.left);
        }
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.node.data) return null;
    let queue = [this.node];
    while (queue.length > 0) {
      let curNode = queue.shift();
      if (curNode.left) {
        queue.push(curNode.left);
      } else {
        return curNode.data;
      }
    }
  }

  max() {
    if (!this.node.data) return null;
    let queue = [this.node];
    while (queue.length > 0) {
      let curNode = queue.shift();
      if (curNode.right) {
        queue.push(curNode.right);
      } else {
        return curNode.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
