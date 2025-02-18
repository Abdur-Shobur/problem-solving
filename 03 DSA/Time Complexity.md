/_ cSpell:disable _/

# Time Complexity কি?

Time Complexity হলো একটি অ্যালগরিদম কত দ্রুত রান করবে তা বোঝানোর জন্য ব্যবহৃত একটি গাণিতিক পরিমাপ। এটি নির্ধারণ করে যে ইনপুটের আকার (n) বৃদ্ধির সাথে সাথে অ্যালগরিদমের রান টাইম কিভাবে পরিবর্তিত হয়।

# Time Complexity কিভাবে কাজ করে?

Time Complexity সাধারণত Big-O নোটেশন (O-নোটেশন) ব্যবহার করে প্রকাশ করা হয়, যা ইনপুটের উপর ভিত্তি করে রান টাইমের উপর প্রভাব বিশ্লেষণ করে।

নিচে কিছু সাধারণ Time Complexity এবং তাদের ব্যাখ্যা দেয়া হলো:

# O(1) - Constant Time:

ইনপুট যাই হোক না কেন, অ্যালগরিদম সর্বদা নির্দিষ্ট সংখ্যক ধাপে শেষ হবে।
উদাহরণ:

```js
function constantTime(arr) {
	return arr[0]; // প্রথম এলিমেন্ট রিটার্ন করবে, যেকোনো আকারের array-তেই একবারই এক্সিকিউট হবে
}
```

# O(log n) - Logarithmic Time:

প্রতিটি ধাপে ইনপুটের আকার অর্ধেক হয়ে যায়।
সাধারণত Binary Search-এ দেখা যায়।
উদাহরণ:

```js
function binarySearch(arr, target) {
	let left = 0,
		right = arr.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] < target) left = mid + 1;
		else right = mid - 1;
	}
	return -1;
}
```

# O(n) - Linear Time:

ইনপুটের আকার বাড়লে রান টাইমও সরাসরি বৃদ্ধি পায়।
সাধারণত for loop ব্যবহার করলে এই complexity হয়।
উদাহরণ:

```js
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}
```

# O(n log n) - Linearithmic Time:

সাধারণত Merge Sort, Quick Sort ইত্যাদি অ্যালগরিদমে দেখা যায়।
উদাহরণ:

```js
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
function merge(left, right) {
	let result = [],
		i = 0,
		j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) result.push(left[i++]);
		else result.push(right[j++]);
	}
	return result.concat(left.slice(i)).concat(right.slice(j));
}
```

# O(n²) - Quadratic Time:

দুইটা লুপ nested থাকলে Complexity সাধারণত O(n²) হয়।
উদাহরণ (Bubble Sort):

```js
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
```

# O(2ⁿ) - Exponential Time:

সাধারণত Recursive Fibonacci Calculation এর মতো সমস্যায় দেখা যায়।
উদাহরণ:

```js
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```

# O(n!) - Factorial Time:

সাধারণত Permutations এবং Combinations সংক্রান্ত সমস্যাগুলোতে পাওয়া যায়।
উদাহরণ:

```js
function factorial(n) {
if (n === 0) return 1;
return n \* factorial(n - 1);
}

```

সংক্ষেপে:
Complexity উদাহরণ
O(1) Array Access (arr[0])
O(log n) Binary Search
O(n) Linear Search
O(n log n) Merge Sort, Quick Sort
O(n²) Bubble Sort, Selection Sort
O(2ⁿ) Fibonacci (Recursion)
O(n!) Traveling Salesman Problem

# Conclusion

Time Complexity বুঝতে পারা খুব গুরুত্বপূর্ণ কারণ এটি আমাদের বলে দেয় যে কোন অ্যালগরিদম বড় ইনপুটে কীভাবে পারফর্ম করবে। সাধারণত, আমরা সবসময় এমন অ্যালগরিদম খুঁজতে চাই যেগুলোর Time Complexity কম হয়।
