/_ cSpell:disable _/

📌 Heaps & Priority Queues
1️⃣ Heap কি?
👉 Heap হলো complete binary tree, যেখানে Parent Node সবসময় Children Nodes থেকে ছোট বা বড় হয়।
👉 এটি Priority Queue তৈরি করতে ব্যবহৃত হয়, যেখানে সবচেয়ে ছোট বা বড় মানটি দ্রুত খুঁজে পাওয়া যায়।
👉 Two types of Heaps:

Min Heap → Parent সবসময় ছোট হয় Child থেকে।
Max Heap → Parent সবসময় বড় হয় Child থেকে।
2️⃣ Priority Queue কি?
👉 Priority Queue হলো এমন Queue, যেখানে সবচেয়ে বেশি priority যুক্ত item আগে dequeue হয়।
👉 এটি Heap Data Structure ব্যবহার করে O(log N) time complexity-এ কাজ করে।
👉 Use Cases:

Dijkstra’s Algorithm (Shortest Path)
Process Scheduling (CPU)
Graph Algorithms (Prim’s, Kruskal’s Algorithm)
3️⃣ Min Heap vs Max Heap
Feature Min Heap Max Heap
Root Node Smallest element Largest element
Insertion O(log N) O(log N)
Deletion O(log N) O(log N)
Search O(N) O(N)
4️⃣ Heap Implementation (JavaScript & TypeScript)
📌 Min Heap (JavaScript)
javascript
Copy
Edit
class MinHeap {
constructor() {
this.heap = [];
}

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

}

// ব্যবহার
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(3);
console.log(minHeap.extractMin()); // 3
console.log(minHeap.extractMin()); // 5
📌 Max Heap (TypeScript)
typescript
Copy
Edit
class MaxHeap {
private heap: number[] = [];

    private getParentIndex(i: number): number { return Math.floor((i - 1) / 2); }
    private getLeftChildIndex(i: number): number { return 2 * i + 1; }
    private getRightChildIndex(i: number): number { return 2 * i + 2; }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extractMax(): number | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop() as number;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.heapifyDown(0);
        return max;
    }

    private heapifyDown(index: number): void {
        let largest = index;
        let left = this.getLeftChildIndex(index);
        let right = this.getRightChildIndex(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

}

// ব্যবহার
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
console.log(maxHeap.extractMax()); // 30
console.log(maxHeap.extractMax()); // 20
5️⃣ Priority Queue Implementation
javascript
Copy
Edit
class PriorityQueue {
constructor() {
this.heap = [];
}

    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heap.sort((a, b) => a.priority - b.priority); // Min Priority Queue
    }

    dequeue() {
        return this.heap.shift(); // Remove Highest Priority Element
    }

}

// ব্যবহার
const pq = new PriorityQueue();
pq.enqueue("A", 3);
pq.enqueue("B", 1);
pq.enqueue("C", 2);
console.log(pq.dequeue()); // { value: 'B', priority: 1 }
6️⃣ Priority Queue-এর ব্যবহার কোথায়?
✅ Operating System (CPU Scheduling, Disk Scheduling)
✅ Dijkstra’s Algorithm (Shortest Path Algorithm)
✅ Prim’s Algorithm (Minimum Spanning Tree)
✅ Network Routing (Packet Prioritization)
✅ Huffman Coding (Data Compression)

📌 7️⃣ Conclusion (উপসংহার)
🔹 Heap হলো Complete Binary Tree, যেখানে Min Heap বা Max Heap হয়।
🔹 Priority Queue হলো special queue, যেখানে priority অনুযায়ী elements process হয়।
🔹 Time Complexity:

Insertion (O(log N))
Deletion (O(log N))
Search (O(N))
