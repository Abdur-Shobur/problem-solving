/_ cSpell:disable _/

📌 Tries (Prefix Tree)
1️⃣ Trie কি?
👉 Trie (Prefix Tree) হলো Tree Data Structure, যা মূলত String Searching & Auto-Completion-এর জন্য ব্যবহৃত হয়।
👉 এটি Dictionary বা Phonebook-এর মতো Words & Prefix Storage করতে সাহায্য করে।
👉 বড় বড় শব্দ বা Prefix Matching দ্রুত খুঁজে পাওয়ার জন্য O(M) Time Complexity (M = Word Length)।

2️⃣ Trie-এর গঠন কেমন হয়?
🔹 প্রতিটি Node: একটি character ধারণ করে।
🔹 Root Node: খালি থাকে।
🔹 Children Nodes: Parent-এর পরবর্তী Characters সংরক্ষণ করে।
🔹 End of Word Marker: বোঝায় যে এটি একটি সম্পূর্ণ শব্দের শেষ।

3️⃣ Trie-এর ব্যবহার কোথায়?
✅ Auto-Complete Suggestions (Google, Search Bar, IDE)
✅ Spell Checking
✅ Dictionary Implementation
✅ IP Routing (Longest Prefix Matching)
✅ Bioinformatics (DNA Sequencing)

4️⃣ Trie-এর Operations
Operations Time Complexity
Insertion O(M)
Search O(M)
Deletion O(M)
5️⃣ Trie Implementation (JavaScript & TypeScript)
📌 Trie Node (JavaScript)
javascript
Copy
Edit
class TrieNode {
constructor() {
this.children = {}; // Child Nodes (Characters)
this.isEndOfWord = false; // শেষ Character চিহ্নিত করে
}
}
📌 Trie Class (Insertion, Search, and Deletion)
javascript
Copy
Edit
class Trie {
constructor() {
this.root = new TrieNode();
}

    // Insert a word into Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Delete a word from Trie
    delete(word) {
        this._delete(this.root, word, 0);
    }

    _delete(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[index];
        if (!node.children[char]) return false;

        let shouldDelete = this._delete(node.children[char], word, index + 1);

        if (shouldDelete) {
            delete node.children[char];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }

}

// ✅ ব্যবহারের উদাহরণ
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("appl")); // false
trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app")); // true
📌 TypeScript Trie Implementation
typescript
Copy
Edit
class TrieNode {
children: { [key: string]: TrieNode } = {};
isEndOfWord: boolean = false;
}

class Trie {
private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

}

// ✅ ব্যবহার
const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hello")); // true
console.log(trie.search("hell")); // false
6️⃣ Auto-Complete Suggestion (Prefix Search)
javascript
Copy
Edit
class Trie {
constructor() {
this.root = new TrieNode();
}

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Return all words that start with the given prefix
    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this._collectWords(node, prefix);
    }

    _collectWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) words.push(prefix);
        for (let char in node.children) {
            words.push(...this._collectWords(node.children[char], prefix + char));
        }
        return words;
    }

}

// ✅ ব্যবহার
const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
trie.insert("car");
trie.insert("dog");
console.log(trie.autoComplete("ca")); // ["cat", "cap", "car"]
7️⃣ Trie বনাম অন্যান্য Data Structure
Feature Trie Hash Table
Search Time O(M) O(1) (Average), O(N) (Worst)
Space Complexity O(N \* M) O(N)
Prefix Matching ✅ Efficient ❌ Not Efficient
Sorted Output ✅ Yes ❌ No
📌 8️⃣ Conclusion (উপসংহার)
🔹 Trie মূলত Word Storage & Prefix Searching-এর জন্য ব্যবহার হয়।
🔹 Auto-Complete, Spell Check, ও Search Optimization-এর জন্য গুরুত্বপূর্ণ।
🔹 Hash Table-এর তুলনায় Trie Prefix Matching-এ অনেক ভালো কাজ করে।
🔹 Time Complexity:

Insertion (O(M))
Search (O(M))
Deletion (O(M))
