// Tree Object
function Tree(){
	// just store root
	this.root = null;
}


// Start By Visiting the root
Tree.prototype.traverse = function() {
	// body...
	this.root.visit();
};


// Start by searching the root
Tree.prototype.search = function(val) {
	// body...
	var found = this.root.search(val);
	return found;
};


// Add a new value to the tree
Tree.prototype.addValue = function(val) {
	// body...
	var n = new Node(val);
	if(this.root == null){
		this.root = n;
	}
	else{
		this.root.addNode(n);
	}
};