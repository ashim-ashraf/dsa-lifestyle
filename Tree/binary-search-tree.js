
class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

var root = null;

function insert(data) {
  root = insertRec(root, data);
}


function insertRec(root, data) {
  if (root == null) {
    root = new Node(data);
    return root;
  }
  if (data < root.data) root.left = insertRec(root.left, data);
  else if (data > root.data) root.right = insertRec(root.right, data);
  return root;
}


function printPostorder(node) {
  if (node == null) return;
  printPostorder(node.left);
  printPostorder(node.right);
  console.log(node.data + " ");
}


function inorder ( node ){
  if (node == null ) return;
    inorder(node.left);
    console.log(node.data);
    inorder(node.right)
} 

function printPreorder(node) {
  if (node == null) return;

  console.log(node.data + " ");
  printPreorder(node.left);
  printPreorder(node.right);
}


function deletedata(data) {
  root = deleteRec(root, data);
}

function deleteRec(root, data) {
  
  if (root == null) return root;

  if (data < root.data) root.left = deleteRec(root.left, data);
  else if (data > root.data) root.right = deleteRec(root.right, data);
  else {
    
    if (root.left == null) return root.right;
    else if (root.right == null) return root.left;

    root.data = minValue(root.right);

    root.right = deleteRec(root.right, root.data);
  }
  return root;
}

function minValue(root) {
  let minv = root.data;
  while (root.left != null) {
    minv = root.left.data;
    root = root.left;
  }
  return minv;
}


function validateBST(node, lower = null, upper = null) {
  if (node === null) return true;
  if (lower !== null && node.data <= lower) return false;
  if (upper !== null && node.data >= upper) return false;
  if (!validateBST(node.left, lower, node.data)) return false;
  if (!validateBST(node.right, node.data, upper)) return false;
  return true;
}

// Driver Code

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

// Print inorder traversal of the BST


console.log("Pre-order");
printPreorder(root);
console.log("In-order");
printInorder(root);

deletedata(20);

console.log("Post-order");
printPostorder(root);

console.log("IN-order");
inorder(root);



let check = validateBST(root);
console.log("IS BST", check )
