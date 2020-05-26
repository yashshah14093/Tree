var tree;

function setup(){

	noCanvas();

	// New Tree
	tree = new Tree();

	// Add ten random values
	for(var i=0;i<10;i++){
		tree.addValue(floor(random(0,100)));
	}

	// Traverse the tree
	tree.traverse();

	// Search the tree for 10
	var result = tree.search(10);
	console.log(result);

}