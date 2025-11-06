const towSum = (number, target) => {
	const numMap = new Map();

	for (let i = 0; i < number.length; i++) {
		const complement = target - number[i];

		if (numMap.has(complement)) {
			return [numMap.get(complement), i];
		}
		numMap.set(number[i], i);
	}
	return [];
};

const towSumObj = (number, target) => {
	const numObj = {};

	for (let i = 0; i < number.length; i++) {
		const complement = target - number[i];

		if (numObj[complement] !== undefined) {
			return [numObj[complement], i];
		}

		numObj[number[i]] = i;
	}

	return [];
};
// test
console.log(towSumObj([2, 7, 11, 15], 9)); // [0, 1]
console.log(towSumObj([3, 2, 4], 6)); // [1, 2]

// test
console.log(towSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(towSum([3, 2, 4], 6)); // [1, 2]
console.log(towSum([3, 3], 6)); // [0, 1]

// brute solution
const towSumBrute = (number, target) => {
	for (let i = 0; i < number.length; i++) {
		for (let j = i + 1; j < number.length; j++) {
			if (number[i] + number[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
};

// test
console.log(towSumBrute([2, 7, 11, 15], 9), `[0, 1]`); // [0, 1]
console.log(towSumBrute([3, 2, 4], 6), `[1, 2]`); // [1, 2]
console.log(towSumBrute([3, 3], 6), `[0, 1]`); // [0, 1]
