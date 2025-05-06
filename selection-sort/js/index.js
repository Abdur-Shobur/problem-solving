const selectionSort = () => {
	let numbers = [5, 2, 9, 1, 5, 6];
	let n = numbers.length;

	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < n; j++) {
			if (numbers[j] < numbers[minIndex]) {
				minIndex = j;
			}
		}

		if (i !== minIndex) {
			[numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
		}
	}
	return numbers;
};

console.log(selectionSort());
