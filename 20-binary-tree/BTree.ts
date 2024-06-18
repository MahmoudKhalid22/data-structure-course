class BNode {
  data: number;
  left: BNode | null;
  right: BNode | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// Function to create a new node
function newNode(data: number): BNode {
  return new BNode(data);
}

// Function to perform inorder traversal
function inorder(node: BNode | null): void {
  if (node !== null) {
    inorder(node.left);
    console.log(node.data + " ");
    inorder(node.right);
  }
}

// Function to perform preorder traversal
function preorder(node: BNode | null): void {
  if (node !== null) {
    console.log(node.data + " ");
    preorder(node.left);
    preorder(node.right);
  }
}

// Function to perform postorder traversal
function postorder(node: BNode | null): void {
  if (node !== null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.data + " ");
  }
}

// Main function to test the traversals
function main(): void {
  // Create a sample binary tree
  const root = newNode(1);
  root.left = newNode(2);
  root.right = newNode(3);
  root.left.left = newNode(4);
  root.left.right = newNode(5);

  console.log("Inorder traversal: ");
  inorder(root);

  console.log("Preorder traversal: ");
  preorder(root);

  console.log("Postorder traversal: ");
  postorder(root);
}

main();
