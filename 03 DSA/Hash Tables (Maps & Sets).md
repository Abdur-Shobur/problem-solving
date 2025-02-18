/_ cSpell:disable _/

# 📌 Hash Tables (Maps & Sets) কি? কিভাবে কাজ করে?

# 1️⃣ Hash Table কি?

👉 Hash Table হলো একটি key-value pair ভিত্তিক ডাটা স্ট্রাকচার, যেখানে hash function ব্যবহার করে ডাটা সংরক্ষণ করা হয়।
👉 এটি constant time (O(1)) কমপ্লেক্সিটি নিয়ে insert, delete, search করতে পারে।

# 2️⃣ Hash Function কী?

🔹 Hash Function একটি ফাংশন, যা কোনো key-কে একটি নির্দিষ্ট index বা hash code-এ পরিবর্তন করে।
🔹 উদাহরণস্বরূপ, যদি আমরা "name" key ব্যবহার করি, তাহলে এটি একটি নির্দিষ্ট hash index-এ সংরক্ষিত হবে।
🔹 যদি একই index-এ দুটি ডাটা সংরক্ষণ করতে হয়, তখন collision handling techniques ব্যবহার করা হয়।

# 3️⃣ Hash Table-এর ব্যবহার কোথায় হয়?

✅ Fast Lookup (O(1)) → দ্রুত ডাটা খোঁজা হয়।
✅ Database Indexing → ডাটাবেজে ফাস্ট রিট্রিভাল নিশ্চিত করতে।
✅ Caching → ওয়েব ব্রাউজার বা API রেসপন্স স্টোর করতে।
✅ Symbol Tables in Compilers → কম্পাইলার সিনট্যাক্স এনালাইসিসে ব্যবহার হয়।
✅ Password Storage (Hashing) → পাসওয়ার্ড এনক্রিপশন ও নিরাপত্তার জন্য।

# 📌 JavaScript-এর Map ও Set

JavaScript-এ দুটি মূল Hash-based ডাটা স্ট্রাকচার আছে:
1️⃣ Map → Key-value pair স্টোর করে।
2️⃣ Set → Unique values সংরক্ষণ করে।

🔹 Map: Key-Value Pair সংরক্ষণের জন্য ব্যবহার হয়।

```js
const userMap = new Map();
userMap.set('name', 'John');
userMap.set('age', 25);
userMap.set('country', 'USA');

console.log(userMap.get('name')); // Output: John
console.log(userMap.has('age')); // Output: true
userMap.delete('country');
console.log(userMap.size); // Output: 2
```

# 📌 Map-এর বৈশিষ্ট্য

✅ Key-Value format.
✅ Any type can be used as a key.
✅ Faster lookup than object for large datasets.

🔹 Set: Unique values সংরক্ষণ করে।

```javascript
const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(20); // Duplicate values যোগ হয় না

console.log(numbers.has(10)); // Output: true
numbers.delete(30);
console.log(numbers.size); // Output: 2
```

# 📌 Set-এর বৈশিষ্ট্য

✅ Unique values only.
✅ Fast lookup (O(1)).
✅ Efficient for checking duplicate values.

# 📌 Hash Table-এর TypeScript Implementation

```typescript
class HashTable {
	private table: { [key: string]: any } = {};

	set(key: string, value: any): void {
		this.table[key] = value;
	}

	get(key: string): any {
		return this.table[key];
	}

	remove(key: string): void {
		delete this.table[key];
	}

	print(): void {
		console.log(this.table);
	}
}
// ব্যবহার
const hashTable = new HashTable();
hashTable.set('name', 'Alice');
hashTable.set('age', 30);
console.log(hashTable.get('name')); // Output: Alice
hashTable.remove('age');
hashTable.print(); // Output: { name: 'Alice' }
```

# 📌 Conclusion (উপসংহার)

- Hash Table হলো একটি গুরুত্বপূর্ণ key-value pair ডাটা স্ট্রাকচার।
- Map & Set JavaScript-এ Hash Table-এর অপটিমাইজড ভার্সন।
- এটি fast lookup (O(1)) নিশ্চিত করে এবং data caching, searching, এবং indexing-এ ব্যাপকভাবে ব্যবহৃত হয়।
