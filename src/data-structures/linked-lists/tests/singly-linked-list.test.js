const { SinglyLinkedList, Node } = require("../singly-linked-list");

describe("Tests singlylinkedlist", () => {
  test("adds first Node to Head successfully", () => {
    const SLL = new SinglyLinkedList();
    const node = new Node(10);
    SLL.addToHead(node);
    expect(SLL.head.value).toBe(10);
    expect(SLL.tail.value).toBe(10);
  });

  test("adds first Node to Tail successfully", () => {
    const SLL = new SinglyLinkedList();
    const node = new Node(10);
    SLL.addToTail(node);
    expect(SLL.head.value).toBe(10);
    expect(SLL.tail.value).toBe(10);
  });

  test("adds three Nodes to Head successfully", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToHead(node1);
    SLL.addToHead(node2);
    SLL.addToHead(node3);
    expect(SLL.head.value).toBe(30);
    expect(SLL.head.next.value).toBe(20);
    expect(SLL.tail.value).toBe(10);
  });

  test("adds three Nodes to Tail successfully", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    expect(SLL.head.value).toBe(10);
    expect(SLL.head.next.value).toBe(20);
    expect(SLL.tail.value).toBe(30);
  });

  test("finds node with desired value and returns the node before it to facilitate the insertNode and deleteNode methods", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    const nodeBeforeFoundNode = SLL.findNode(30);
    expect(nodeBeforeFoundNode.value).toBe(20);
  });

  test("returns false if node isn't found", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    const nodeBeforeFoundNode = SLL.findNode(40);
    expect(nodeBeforeFoundNode).toBe(false);
  });

  test("lists all nodes in the list", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    const nodeListArr = SLL.listNodes();
    expect(nodeListArr).toEqual([10, 20, 30]);
  });

  test("inserts node before desired node value passed to findNode", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    const node4 = new Node(25);
    SLL.insertNode(node4, 10);
    const nodeListArr = SLL.listNodes();
    expect(nodeListArr).toEqual([25, 10, 20, 30]);
    const node5 = new Node(50);
    SLL.insertNode(node5, 30);
    const nodeListArr2 = SLL.listNodes();
    expect(nodeListArr2).toEqual([25, 10, 20, 50, 30]);
  });

  test("deletes desired node", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    SLL.deleteNode(20);
    const nodeListArr = SLL.listNodes();
    expect(nodeListArr).toEqual([10, 30]);
    SLL.deleteNode(10);
    const nodeListArr2 = SLL.listNodes();
    expect(nodeListArr2).toEqual([30]);
  });

  test("deletes desired node and handles Head pointer", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    SLL.deleteNode(10);
    expect(SLL.head.value).toBe(20);
  });

  test("deletes desired node and handles Tail pointer", () => {
    const SLL = new SinglyLinkedList();
    const node1 = new Node(10);
    const node2 = new Node(20);
    const node3 = new Node(30);
    SLL.addToTail(node1);
    SLL.addToTail(node2);
    SLL.addToTail(node3);
    SLL.deleteNode(30);
    expect(SLL.tail.value).toBe(20);
  });
});
