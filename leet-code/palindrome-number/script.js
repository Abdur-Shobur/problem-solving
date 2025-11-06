const palindromeNumber = (x) => {
	if (x < 0) return false;
	const strNum = x.toString();
	const reversedStrNum = strNum.split('').reverse().join('');
	return strNum === reversedStrNum;
};

const palindromeNumberOptimized = (x) => {
	const original = x.toString();
	let left = 0,
		right = original.length - 1;
	while (left <= right) {
		if (original[left] !== original[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

const iterations = 1_000_000;
const testValue = 123454321;

console.time('palindromeNumber (1M runs)');
for (let i = 0; i < iterations; i++) {
	palindromeNumber(testValue);
}
console.timeEnd('palindromeNumber (1M runs)'); // 245.873ms

console.time('palindromeNumberOptimized (1M runs)');
for (let i = 0; i < iterations; i++) {
	palindromeNumberOptimized(testValue);
}
console.timeEnd('palindromeNumberOptimized (1M runs)'); // 35.669ms
