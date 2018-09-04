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
}

module.exports = { BinarySearchTree, Node };
