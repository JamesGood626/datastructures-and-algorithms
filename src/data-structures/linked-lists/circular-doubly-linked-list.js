function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function CircularDoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

CircularDoublyLinkedList.prototype.clear = CDLL => {
  CDLL.head = null;
  CDLL.tail = null;
};

CircularDoublyLinkedList.prototype.addToHead = (CDLL, node) => {
  if (CDLL.head === null) {
    CDLL.head = node;
    CDLL.tail = node;
    return;
  }
  tempNode = CDLL.head;
  tempNode.prev = node;
  CDLL.head = node;
  CDLL.head.next = tempNode;
  CDLL.head.prev = CDLL.tail;
  CDLL.tail.next = CDLL.head;
};

CircularDoublyLinkedList.prototype.addToTail = (CDLL, node) => {
  if (CDLL.tail === null) {
    CDLL.tail = node;
    CDLL.head = node;
  }
  tempNode = CDLL.tail;
  tempNode.next = node;
  CDLL.tail = node;
  CDLL.tail.prev = tempNode;
  CDLL.tail.next = CDLL.head;
  CDLL.head.prev = CDLL.tail;
};

CircularDoublyLinkedList.prototype.findNode = (CDLL, val) => {
  const startNode = CDLL.head;
  if (startNode.value === val) return startNode;
  let currentNode = CDLL.head.next;
  while (currentNode && currentNode !== startNode) {
    if (currentNode.value === val) return currentNode;
    currentNode = currentNode.next;
  }
  return false;
};

CircularDoublyLinkedList.prototype.insertBefore = (CDLL, node, afterNode) => {
  if (afterNode === CDLL.head) {
    CDLL.addToHead(CDLL, node);
    return;
  }
  const tempNode = afterNode.prev;
  tempNode.next = node;
  node.next = afterNode;
  afterNode.prev = node;
};

CircularDoublyLinkedList.prototype.insertAfter = (CDLL, node, beforeNode) => {
  if (beforeNode === CDLL.tail) {
    CDLL.addToTail(CDLL, node);
    return;
  }
  const tempNode = beforeNode.next;
  tempNode.prev = node;
  node.prev = beforeNode;
  node.next = tempNode;
  beforeNode.next = node;
};

CircularDoublyLinkedList.prototype.deleteNode = (CDLL, value) => {
  const foundNode = CDLL.findNode(CDLL, value);
  if (!foundNode) {
    return false;
  }
  if (foundNode === CDLL.head) {
    CDLL.head = foundNode.next;
    CDLL.head.prev = CDLL.tail;
    CDLL.tail.next = CDLL.head;
    foundNode.next = null;
    foundNode.prev = null;
    return true;
  }
  if (foundNode === CDLL.tail) {
    CDLL.tail = foundNode.prev;
    CDLL.tail.next = foundNode.next;
    foundNode.next = null;
    foundNode.prev = null;
    return true;
  }
  const beforeNode = foundNode.prev;
  const afterNode = foundNode.next;
  beforeNode.next = afterNode;
  afterNode.prev = beforeNode;
  foundNode.next = null;
  foundNode.prev = null;
  return true;
};

CircularDoublyLinkedList.prototype.listNodes = CDLL => {
  const arr = [];
  const startNode = CDLL.head;
  arr.push(startNode.value);
  let currentNode = CDLL.head.next;
  while (currentNode && currentNode !== startNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return arr;
};

module.exports = { CircularDoublyLinkedList, Node };
