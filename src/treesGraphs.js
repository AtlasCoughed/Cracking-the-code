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
//--------
// II.) TO DO:Binary Heaps
// diff between min / max heap is order;
// A min-heap is a complete binary search tree (A binary tree where the only missing node is the last level right node)
// The unique feature of a min heap is that each node is smaller than its children; the root is the minimum of the tree

// Two properties: insert and extract_min

// INSERT
// 1.) Insert the element at the bottom right

// 2.) Fix three tree by swapping the new element with its parent

// 3.) Repeat until we find the appropriate spot for the element



// EXTRACT MIN
//1.)We remove the minimum element and swap it with the last element in the heap (bottom right most)

//2.) Bubble down this element, swapping it with one of its own children until the min heap is restored

//--------
// III.) Tries(Prefix Trees)
// Variant of an n-ary tree in which characters are stored at each node.
//  Used to find words with quick prefix lookups
// O(k) time; k = length of word; vs hash table - only can find available words
// end characters of word = * || false

//--------
// IV.) Graphs
// Can be directed (one way) or non-directed (two way)
// Two ways to represent graphs: 1.) adjacent lists 2.) adjacent matrices


// A. -- Adjacent Lists
// Every vertex (node) stores a reference to a list of adjacent vertices
	// Unidirectional graphs  - edges (a, b) will be stored twice
			// Once in a's adjacent vertices
			// Once in b's adjacent vertices
	// // Can be displayed as
	// 0: 1;
	// 1: 2;
	// 2: 0, 3;
	// 3: 2;
	// 4: 6;
	// 5: 4;
	// 6: 5;


// B) Adjacent Matrices
// NxN boolean matrix (where N is the number of nodes)
// where true value at the matrix[i][j] indicates an edge from node i and node j
	//Unidirectional
		// adjacent matrix will be symmetric

//-----------------------

//V.) Graph search - Breathe first, Depth first

// Depth first search -
	// visit a
	// iterate through each of a's neighbrs
	// repeat with b, a's neighbor

function searchDeep(root){
	if(root=== null) retur;
	console.log(root.val);
	root.visited = true;
	for(var i = 0; i < root.children.length; i++){
		if(root.children[i].visited === false){
			searchDeep(root.children[i])
		}
	}
}

// Breathe first search
// less intuitive; main tripping point is assuming that it is recursive
// Instead use a queue

// 1.) Node visits each of a's neighbors before visiting any of their neighbors [level by level search]

function breatheFirst(root) {
	let queue = [];
	root.marked = true;
	queue.push(root.value);

	while(!queue.length){
		let r = queue.splice(0,1);
		console.log("Visited: ",r);
		r.adjacent.forEach((item) => {
			if(item.marked === false){
				item.marked = true;
				queue.push(item);
			}
		});
	}
}

// Bidirectional search
// Used to find the shortest path between a source and destination node

// 1.) Essentially running two simultaneous breadth first searches; one from each node

// 2.) When their searches collide, we have found a path

// Faster than breadth first by k^(d/2)


// Red-black trees
// self balancing binary search tree
// do not ensure strict balancing
// O(log(n)) - insertions, retrievals, removals
// Less memory -> rebalance faster; trees that will be reconfigued frequently

// 1.) Nodes are red or black
// 2.) Root is black
// 3.) Leaves which are null ===  black
// 4.) Every red node must have two black children; black nodes can have black children, but not vice versa with red
// 5.) Every path from a node to its leaves must have the same number of black chilren

// #4 - No parent - child : red-red
//


