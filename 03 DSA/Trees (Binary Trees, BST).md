/_ cSpell:disable _/

# 🌲 Trees (Binary Trees & BST) কি? কোথায় ব্যবহার করা হয়?

# 1️⃣ Tree কী?

👉 Tree হলো একটি hierarchical data structure, যেখানে nodes সংযুক্ত থাকে এবং প্রতিটি parent node এর এক বা একাধিক child nodes থাকতে পারে।
👉 এটি Graph-এর একটি বিশেষ ধরনের গঠন, যেখানে কোনো cycles (loop) থাকে না।

# 2️⃣ Tree-এর Components (গঠনমূলক অংশ)

🔹 Root → মূল নোড, যেখান থেকে পুরো ট্রি শুরু হয়।
🔹 Node → প্রতিটি উপাদান, যা ডাটা এবং চাইল্ড নোডের লিঙ্ক ধারণ করে।
🔹 Parent & Child → একটি নোডের নিচের নোডগুলো Child, এবং যার নিচে এটি রয়েছে সেটি Parent।
🔹 Leaf → যে নোডের কোনো চাইল্ড নেই, সেটি Leaf Node।
🔹 Height → Root থেকে সবচেয়ে গভীর নোডের দূরত্ব (Longest Path)।

# 📌 Types of Trees (ট্রির ধরণ)

✅ Binary Tree (BT) → প্রতিটি নোড সর্বোচ্চ ২টি চাইল্ড নোড ধারণ করতে পারে।
✅ Binary Search Tree (BST) → একটি Sorted Binary Tree, যেখানে left child < root < right child।
✅ AVL Tree → Self-balancing BST, যেখানে Height Difference ≤ 1 হয়।
✅ Heap Tree → Min-Heap & Max-Heap, যেখানে parent নোড সবসময় child থেকে ছোট/বড় হয়।
✅ Trie (Prefix Tree) → Dictionary, Auto-complete, এবং String Matching-এর জন্য ব্যবহৃত হয়।

# 📌 1️⃣ Binary Tree কি?

Binary Tree হলো একটি hierarchical structure, যেখানে প্রতিটি নোড সর্বোচ্চ ২টি চাইল্ড নোড ধারণ করতে পারে।
➡ Left Child → ছোট মান ধারণ করে।
➡ Right Child → বড় মান ধারণ করে।

# 📌 Example of Binary Tree

```
A
/ \
 B C
/ \ \
 D E F
```

# 📌 Binary Tree-এর ব্যবহার

✅ Expression Trees → Mathematical expressions পার্স করতে।
✅ Hierarchical Data Representation → ফাইল সিস্টেম, XML/HTML পার্সিং।
✅ Artificial Intelligence → Decision trees, Game Trees।

# 📌 2️⃣ Binary Search Tree (BST) কি?

➡ BST হলো Binary Tree-এর একটি বিশেষ রূপ, যেখানে প্রতিটি left subtree-এর মান root-এর চেয়ে ছোট, এবং right subtree-এর মান root-এর চেয়ে বড়।

# 📌 BST-এর উদাহরণ

```
50
/ \
30 70
/ \ / \
20 40 60 80
```

# 📌 BST-এর সুবিধা

✅ O(log N) Complexity → দ্রুত search, insert, delete করা যায়।
✅ Efficient Sorting → In-order traversal করলে Sorted Output পাওয়া যায়।
✅ Database Indexing → SQL & NoSQL databases-এ Indexing-এ ব্যবহৃত হয়।

# 📌 3️⃣ BST-এর JavaScript & TypeScript Implementation

📌 JavaScript Implementation of BST

```javascript
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let current = this.root;
		while (true) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}

	search(value) {
		let current = this.root;
		while (current) {
			if (value === current.value) return true;
			current = value < current.value ? current.left : current.right;
		}
		return false;
	}
}

// BST ব্যবহার
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
console.log(bst.search(30)); // Output: true
console.log(bst.search(100)); // Output: false
```

📌 TypeScript Implementation of BST

```typescript
class TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	root: TreeNode | null = null;

	insert(value: number): void {
		const newNode = new TreeNode(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let current: TreeNode | null = this.root;
		while (current) {
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return;
				}
				current = current.right;
			}
		}
	}

	search(value: number): boolean {
		let current: TreeNode | null = this.root;
		while (current) {
			if (value === current.value) return true;
			current = value < current.value ? current.left : current.right;
		}
		return false;
	}
}

// BST ব্যবহার
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
console.log(bst.search(30)); // Output: true
console.log(bst.search(100)); // Output: false
```

# 📌 4️⃣ BST-এর ব্যবহার কোথায়?

✅ Searching & Sorting → O(log N) সময় জটিলতা।
✅ Database Indexing → Binary Search ব্যবহার করা হয়।
✅ Auto-complete System → Dictionary & Search Engines।
✅ File System → Directory management & hierarchical structures।
✅ Network Routing Algorithms → Efficient path finding।

# 📌 5️⃣ BST vs Binary Tree vs Heap

# 📌 Conclusion (উপসংহার)

🔹 Binary Tree হলো Parent-Child relationship-ভিত্তিক Data Structure।
🔹 Binary Search Tree (BST) হলো Sorted Binary Tree, যা Searching & Sorting-এ দ্রুত কাজ করে।
🔹 BST বিভিন্ন গুরুত্বপূর্ণ অ্যাপ্লিকেশনে ব্যবহৃত হয়, যেমন Databases, AI, File Systems & Networks।
