/_ cSpell:disable _/

📌 Graphs কি? কিভাবে কাজ করে? কোথায় ব্যবহার করা হয়?
1️⃣ Graph কি?
👉 Graph হলো একটি non-linear data structure, যেখানে nodes (vertices) এবং edges (সংযোগ লিঙ্ক) থাকে।
👉 এটি relationships বা connections প্রকাশ করতে ব্যবহৃত হয়, যেমন social networks, maps, web pages, network topology ইত্যাদি।

2️⃣ Graph-এর Components (গঠনমূলক অংশ)
🔹 Vertices (Nodes) → গ্রাফের মূল উপাদান, যা কোনো ডাটা ধারণ করতে পারে।
🔹 Edges (Connections) → দুইটি নোডের মধ্যে সংযোগ, যা সম্পর্ক প্রকাশ করে।
🔹 Adjacency List & Matrix → গ্রাফ সংরক্ষণের জন্য ব্যবহৃত দুটি সাধারণ উপায়।

3️⃣ Graph-এর প্রকারভেদ
📌 1️⃣ Undirected Graph (অনির্দেশিত গ্রাফ)
👉 এখানে সংযোগ দুই দিকেই চলতে পারে, অর্থাৎ A থেকে B এবং B থেকে A উভয় দিকে যাওয়া যায়।
🔹 Example:

less
Copy
Edit
A — B
| |
C — D
📌 2️⃣ Directed Graph (দ্বিদিক গ্রাফ / Digraph)
👉 সংযোগ একদিক থেকে অন্যদিকে যায়, কিন্তু উল্টো নয়।
🔹 Example:

css
Copy
Edit
A → B
↑ ↓
C ← D
📌 3️⃣ Weighted Graph (ওজনযুক্ত গ্রাফ)
👉 এখানে প্রত্যেকটি Edge একটি ওজন (Weight) ধারণ করে, যা দূরত্ব বা খরচ প্রকাশ করে।
🔹 Example:

less
Copy
Edit
A —(5)— B
| |
(3) (2)
| |
C —(4)— D
📌 4️⃣ Cyclic & Acyclic Graph
✅ Cyclic Graph: যেখানে একই পথে ফিরে আসা সম্ভব।
✅ Acyclic Graph: যেখানে কোনো Cycle নেই, যেমন DAG (Directed Acyclic Graph)।

4️⃣ Graph সংরক্ষণের উপায়
📌 Adjacency Matrix (O(V²) Space)
👉 এটি একটি 2D Array, যেখানে 1 বা Weight সংযোগ নির্দেশ করে।
🔹 Example:

css
Copy
Edit
A B C D
A 0 1 1 0
B 1 0 0 1
C 1 0 0 1
D 0 1 1 0
📌 Adjacency List (O(V + E) Space)
👉 এটি HashMap/Array ব্যবহার করে সংযোগ সংরক্ষণ করে।
🔹 Example:

javascript
Copy
Edit
{
A: [B, C],
B: [A, D],
C: [A, D],
D: [B, C]
}
5️⃣ Graph-এর ব্যবহার কোথায়?
✅ Google Maps & GPS → Shortest Path Finding (Dijkstra’s Algorithm)
✅ Social Networks → Facebook, LinkedIn (Friend Suggestions)
✅ Web Crawling (Google Search Engine) → PageRank Algorithm
✅ Computer Networks → Routing Algorithms
✅ AI & Machine Learning → Knowledge Graphs

6️⃣ JavaScript & TypeScript এ Graph এর Implementation
📌 JavaScript Graph (Adjacency List)
javascript
Copy
Edit
class Graph {
constructor() {
this.adjacencyList = {};
}

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Undirected Graph
    }

    display() {
        console.log(this.adjacencyList);
    }

}

// ব্যবহার
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.display();
// Output: { A: [ 'B', 'C' ], B: [ 'A' ], C: [ 'A' ] }
📌 TypeScript Graph Implementation
typescript
Copy
Edit
class Graph {
adjacencyList: { [key: string]: string[] } = {};

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Undirected Graph
    }

    display(): void {
        console.log(this.adjacencyList);
    }

}

// ব্যবহার
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.display();
7️⃣ Graph Traversal (Graph-এ ট্রাভার্স করার পদ্ধতি)
✅ BFS (Breadth-First Search) → Level by Level Traversal
✅ DFS (Depth-First Search) → Deep Traversal (Recursive/Iterative)

📌 BFS (Breadth-First Search)
👉 Queue ব্যবহার করে Level Order Traversal করে।

javascript
Copy
Edit
bfs(startNode) {
let queue = [startNode];
let visited = new Set();
visited.add(startNode);

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);

        this.adjacencyList[node].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        });
    }

}
📌 DFS (Depth-First Search)
👉 Recursive বা Stack ব্যবহার করে গভীরে খোঁজ করে।

javascript
Copy
Edit
dfs(startNode, visited = new Set()) {
console.log(startNode);
visited.add(startNode);

    this.adjacencyList[startNode].forEach(neighbor => {
        if (!visited.has(neighbor)) {
            this.dfs(neighbor, visited);
        }
    });

}
📌 8️⃣ Conclusion (উপসংহার)
🔹 Graph হলো most powerful data structure, যা real-world relationships মডেল করতে ব্যবহৃত হয়।
🔹 Graph Traversal (BFS, DFS) গুরুত্বপূর্ণ কারণ এটি shortest path, recommendation systems, AI algorithms-এ ব্যবহৃত হয়।
🔹 Graph Algorithms → Dijkstra’s Algorithm, Bellman-Ford, Floyd-Warshall, Kruskal’s & Prim’s Algorithm ইত্যাদি।
