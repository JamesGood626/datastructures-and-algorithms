const { BinarySearchTree, Node } = require("../binary-search-tree");

const traversalOrder = {
  PRE_ORDER: "pre_order",
  IN_ORDER: "in_order",
  POST_ORDER: "post_order"
};

const createNodes = BST => {
  BST.insertNode(new Node(100));
  BST.insertNode(new Node(110));
  BST.insertNode(new Node(90));
  BST.insertNode(new Node(80));
  BST.insertNode(new Node(120));
  BST.insertNode(new Node(70));
  BST.insertNode(new Node(130));
  BST.insertNode(new Node(95));
  BST.insertNode(new Node(92));
  BST.insertNode(new Node(105));
  BST.insertNode(new Node(115));
};

const getList = node => {
  console.log(node.value);
};

describe("Tests BST", () => {
  let BST;

  beforeAll(() => {
    BST = new BinarySearchTree();
  });

  afterEach(() => {
    BST.clear(BST);
  });

  test("adds first Node to trees", () => {
    BST.insertNode(new Node(100));
    expect(BST.root.value).toBe(100);
  });

  test("adds first Node to root and then lesser Node to root's left", () => {
    BST.insertNode(new Node(100));
    BST.insertNode(new Node(90));
    expect(BST.root.left.value).toBe(90);
  });

  test("adds first Node to root and then greater Node to root's right", () => {
    BST.insertNode(new Node(100));
    BST.insertNode(new Node(110));
    expect(BST.root.right.value).toBe(110);
  });

  test("adds numerous Nodes just for the sake of expecting bst structure to be correct.", () => {
    createNodes(BST);
    expect(BST.root.right.value).toBe(110);
    expect(BST.root.right.left.value).toBe(105);
    expect(BST.root.left.value).toBe(90);
    expect(BST.root.right.right.value).toBe(120);
    expect(BST.root.right.right.left.value).toBe(115);
    expect(BST.root.left.left.value).toBe(80);
    expect(BST.root.left.right.value).toBe(95);
    expect(BST.root.left.right.left.value).toBe(92);
    expect(BST.root.left.left.left.value).toBe(70);
    expect(BST.root.right.right.right.value).toBe(130);
  });

  test("traverses the tree in order.", () => {
    createNodes(BST);
    BST.traverse(BST.root, traversalOrder.PRE_ORDER, getList);
  });

  // test("removes node from BST and sets pointers accordingly.", () => {

  // });
});
