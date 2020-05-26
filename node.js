// Node in the tree
function Node(val) {
	// body...
	this.value = val;
	this.left  = null;
	this.right = null;
}


// Search the tree for value
Node.prototype.search = function(val) {
	// body...
	if(this.value == val){
		return("Found : " + val);
	}
	else if(this.value < val && this.left != null){
		return this.left.search(val);
	}
	else if(this.value >= val && this.right != null){
		return this.right.search(val);
	}

	return "Not Found";
};


// Visit a node
Node.prototype.visit = function() {
	// body...
	// Recursively Go Left
	if(this.left != null){
		this.left.visit();
	}
	// Print out value
	console.log(this.value);
	// Recursively Go Right
	if(this.right != null){
		this.right.visit();
	}

};


// Add a Node
Node.prototype.addNode = function(n) {
	// body...
	if(this.value<n){
		if(this.left == null){
			this.left = n;
		}
		else{
			this.left.addNode(n);
		}
	}
	else{
		if(this.right == null){
			this.right = n;
		}
		else{
			this.right.addNode(n);
		}
	}

};
