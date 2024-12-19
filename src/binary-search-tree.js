const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    if(!this.node) return null
    return this.node;
  }

  add(data) {
    if (!this.node) this.node = new Node(data);
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
    if (!this.node) return false;
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
    if (!this.node) return null;
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

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }

  removeNode(node, value) {
    if (node === null) return node;
    if (value === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.utilMin(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
    } else if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else {
      node.right = this.removeNode(node.right, value);
      return node;
    }
  }

  min() {
    if (!this.node) return null;
    return this.utilMin(this.node).data;
  }

  utilMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
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
