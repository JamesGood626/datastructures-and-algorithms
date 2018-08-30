const {
  CircularDoublyLinkedList,
  Node
} = require("../circular-doubly-linked-list");

describe("Tests singlylinkedlist", () => {
  let CDLL;

  beforeAll(() => {
    CDLL = new CircularDoublyLinkedList();
  });

  afterEach(() => {
    CDLL.clear(CDLL);
  });

  test("adds first Node to Head successfully", () => {
    expect.assertions(2);
    CDLL.addToHead(CDLL, new Node(10));
    expect(CDLL.head.value).toBe(10);
    expect(CDLL.tail.value).toBe(10);
  });

  test("adds first Node to Tail successfully", () => {
    expect.assertions(2);
    CDLL.addToTail(CDLL, new Node(20));
    expect(CDLL.head.value).toBe(20);
    expect(CDLL.tail.value).toBe(20);
  });

  test("adds three Nodes to Head successfully", () => {
    CDLL.addToHead(CDLL, new Node(10));
    CDLL.addToHead(CDLL, new Node(20));
    CDLL.addToHead(CDLL, new Node(30));
    const nodeArr = CDLL.listNodes(CDLL);
    expect(nodeArr).toEqual([30, 20, 10]);
    expect(CDLL.head.prev.value).toBe(CDLL.tail.value);
    expect(CDLL.tail.next.value).toBe(CDLL.head.value);
  });

  test("adds three Nodes to Tail successfully", () => {
    CDLL.addToTail(CDLL, new Node(40));
    CDLL.addToTail(CDLL, new Node(50));
    CDLL.addToTail(CDLL, new Node(60));
    const nodeArr = CDLL.listNodes(CDLL);
    expect(nodeArr).toEqual([40, 50, 60]);
    expect(CDLL.head.prev.value).toBe(CDLL.tail.value);
    expect(CDLL.tail.next.value).toBe(CDLL.head.value);
  });

  test("lists all nodes in the list", () => {
    CDLL.addToHead(CDLL, new Node(10));
    CDLL.addToHead(CDLL, new Node(20));
    CDLL.addToHead(CDLL, new Node(30));
    const nodeArr = CDLL.listNodes(CDLL);
    expect(nodeArr).toEqual([30, 20, 10]);
  });

  test("finds node with desired value and returns it to facilitate the insertNode and deleteNode methods", () => {
    CDLL.addToTail(CDLL, new Node(10));
    CDLL.addToTail(CDLL, new Node(20));
    CDLL.addToTail(CDLL, new Node(30));
    CDLL.addToTail(CDLL, new Node(40));
    const headNode = CDLL.findNode(CDLL, 10);
    const tailNode = CDLL.findNode(CDLL, 40);
    expect(headNode).toEqual(CDLL.head);
    expect(tailNode).toEqual(CDLL.tail);
  });

  test("returns false if node isn't found", () => {
    CDLL.addToTail(CDLL, new Node(10));
    CDLL.addToTail(CDLL, new Node(20));
    CDLL.addToTail(CDLL, new Node(30));
    CDLL.addToTail(CDLL, new Node(40));
    const notFoundNode = CDLL.findNode(CDLL, 50);
    expect(notFoundNode).toBe(false);
  });

  test("linked list can loop infinitely", () => {
    // Kind of looks like a boot :o
    CDLL.addToTail(CDLL, new Node(10));
    CDLL.addToTail(CDLL, new Node(20));
    CDLL.addToTail(CDLL, new Node(30));
    expect(CDLL.head.value).toBe(10);
    expect(CDLL.tail.value).toBe(30);
    expect(CDLL.head.next.value).toBe(20);
    expect(CDLL.head.next.next.value).toBe(30);
    expect(CDLL.head.next.next.next.value).toBe(10);
    expect(CDLL.head.next.next.next.next.value).toBe(20);
    expect(CDLL.head.next.next.next.next.next.value).toBe(30);
    expect(CDLL.head.next.next.next.next.next.next.value).toBe(10);
  });

  test("inserts node before desired node value passed to findNode", () => {
    CDLL.addToTail(CDLL, new Node(10));
    CDLL.addToTail(CDLL, new Node(20));
    CDLL.addToTail(CDLL, new Node(30));
    CDLL.addToTail(CDLL, new Node(40));
    const foundNode = CDLL.findNode(CDLL, 30);
    CDLL.insertBefore(CDLL, new Node(70), foundNode);
    const foundHeadNode = CDLL.findNode(CDLL, 10);
    CDLL.insertBefore(CDLL, new Node(26), foundHeadNode);
    const nodeArr = CDLL.listNodes(CDLL);
    expect(nodeArr).toEqual([26, 10, 20, 70, 30, 40]);
  });

  // test("deletes desired node", () => {});

  // test("deletes desired node and handles Head pointer", () => {});

  // test("deletes desired node and handles Tail pointer", () => {});
});
