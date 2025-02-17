/*=====================
- 0.  Run Hello world
=======================*/
const helloWorld = () => {
	console.log('Hello World');
};

// helloWorld();

/*=====================
- 0.  Run Hello world
=======================*/
const reverseStringOptimized = (str = '') => {
	let arr = str.split('');
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]]; // Swap
		console.log(arr);
		left++;
		right--;
	}

	return arr.join('');
};

const reverseStringNaive = (str = '') => {
	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i]; // Appending characters
	}
	return reversed;
};

// Test String
const testString = 'abcdefghijklmnopqrstuvwxyz'; // Large string

// Measure Naive Approach
console.time('Naive Approach');
reverseStringNaive(testString);
console.timeEnd('Naive Approach');

// Measure Optimized Approach
console.time('Optimized Approach');
reverseStringOptimized(testString);
console.timeEnd('Optimized Approach');
