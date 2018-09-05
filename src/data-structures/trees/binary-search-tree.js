class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  clear() {
    this.root = null;
  }

  insertNode(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    const { parentNode, assign } = this.traverseUntilLeafNull(node, this.root);
    if (assign === "left") {
      parentNode.left = node;
    } else if (assign === "right") {
      parentNode.right = node;
    }
  }

  traverse(node, order, cb) {
    if (order === "pre_order") {
      cb(node);
    }
    if (node.left !== null) this.traverse(node.left, order, cb);
    if (order === "in_order") {
      cb(node);
    }
    if (node.right !== null) this.traverse(node.right, order, cb);
    if (order === "post_order") {
      cb(node);
    }
  }

  traverseUntilLeafNull(node, traversingNode) {
    let nodeWithNullLeaf = null;
    while (!nodeWithNullLeaf) {
      if (node.value < traversingNode.value) {
        traversingNode.left !== null
          ? (traversingNode = traversingNode.left)
          : (nodeWithNullLeaf = { parentNode: traversingNode, assign: "left" });
      } else if (node.value > traversingNode.value) {
        traversingNode.right !== null
          ? (traversingNode = traversingNode.right)
          : (nodeWithNullLeaf = {
              parentNode: traversingNode,
              assign: "right"
            });
      }
    }
    return nodeWithNullLeaf;
  }

  traverseUntilFoundNode(value, traversingNode) {
    let foundNode = null;
    let notInTree = null;
    let parentNode = null;
    while (!foundNode || !notInTree) {
      foundNode = value === traversingNode.value ? traversingNode : null;
      parentNode = traversingNode;
      if (value < traversingNode.value) {
        traversingNode.left !== null
          ? (traversingNode = traversingNode.left)
          : (notInTree = true);
      } else if (value > traversingNode.value) {
        traversingNode.right !== null
          ? (traversingNode = traversingNode.right)
          : (notInTree = true);
      }
    }
    return { parentNode, foundNode };
  }
}

module.exports = { BinarySearchTree, Node };
