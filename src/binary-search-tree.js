const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if(this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }


  has(data) {
    return this.hasNode(this.rootNode, data);
  }
  hasNode(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
        return true;
    }
    if (data < node.data) {
      return this.hasNode(node.left, data);
    } else {
      return this.hasNode(node.right, data);
    }
  }

  find(data) {
      return this.findNode(this.rootNode, data);
  }
  findNode(node, data) {
    if (node === undefined || node === null) {
      return null;
    }
    if (data === node.data) {
        return node;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }
  
    // should return the node itself and not just the data in the node, as node allwos to acess its
    // structure such as parents, children

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(current, data) {
    if (current === null) {
      return null;
    }
    if (data < current.data) {
      current.left = this.removeNode(current.left, data);
    } else if (data > current.data) {
      current.right = this.removeNode(current.right, data);
    } else {
      if (current.left === null && current.right === null) {
      current = null;
      return current;
      }

      if (current.left === null) {
        current = current.right;
        return current;
      } else if (current.right === null) {
        current = current.left;
        return current;
      }

      const minRight = this.minOfSub(current.right);
      current.data = minRight.data;
      current.right = this.removeNode(current.right, minRight.data);
    }
    return current;
  }
  minOfSub(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minOfSub(node.left);
    }
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    let current = this.rootNode; 
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
    // remove line with error and write your code here
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    let current = this.rootNode; 
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};