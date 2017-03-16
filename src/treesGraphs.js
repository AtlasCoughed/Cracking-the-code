/**
 * Created by miketran on 3/16/17.
 */


function inOrderTraversal(root){
	if(root!=null){
		inOrderTraversal(root.left);
		console.log(root.val);
		inOrderTraversal(root.right);
	}
}

function preOrderTraversal(root){
	if(node!=null){
		console.log(root.val);
		preOrderTraversal(root.left);
		preOrderTraversal(root.right);
	}
}

function postOrderTraversal(root){
	if(node!=null){
		postOrderTraversal(root.left);
		posOrderTraversal(root.right);
		console.log(root.val);
	}
}

///Binary Heaps