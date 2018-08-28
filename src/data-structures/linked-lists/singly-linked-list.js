module.exports = {
  SinglyLinkedList: function() {
    this.head = null;
    this.tail = null;

    this.addToHead = node => {
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        return;
      }
      const tempNode = this.head;
      this.head = node;
      this.head.next = tempNode;
    };

    this.addToTail = node => {
      if (this.tail === null) {
        this.tail = node;
        this.head = node;
        return;
      }
      const tempNode = this.tail;
      this.tail = node;
      tempNode.next = this.tail;
    };

    this.findNode = val => {
      let currentNode = this.head;
      if (currentNode.value === val) {
        return currentNode;
      }
      while (currentNode) {
        if (currentNode.next !== null && currentNode.next.value === val) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
      return false;
    };

    this.insertNode = (node, insertBefore) => {
      const nodeBeforeInsert = this.findNode(insertBefore);
      if (nodeBeforeInsert.value === this.head.value) {
        this.addToHead(node);
        return;
      }
      const tempNode = nodeBeforeInsert.next;
      nodeBeforeInsert.next = node;
      node.next = tempNode;
    };

    this.deleteNode = nodeToDelete => {
      const nodeBeforeNodeToBeDeleted = this.findNode(nodeToDelete);
      if (
        nodeBeforeNodeToBeDeleted.value === this.head.value &&
        nodeToDelete === this.head.value
      ) {
        this.head = this.head.next;
        return;
      }
      if (nodeBeforeNodeToBeDeleted.next.value === this.tail.value) {
        nodeBeforeNodeToBeDeleted.next = null;
        this.tail = nodeBeforeNodeToBeDeleted;
        return;
      }
      const tempNode = nodeBeforeNodeToBeDeleted.next.next;
      nodeBeforeNodeToBeDeleted.next = tempNode;
    };

    this.listNodes = () => {
      const arr = [];
      let currentNode = this.head;
      while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
    };
  },
  Node: function(value) {
    this.value = value;
    this.next = null;
  }
};
