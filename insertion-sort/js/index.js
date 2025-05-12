function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		console.log(j);
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = current;
	}
	return arr;
}

// Example usage:
let numbers = [1, 2, 3];

function testDeeply(arr = []) {
	for (let i = 1; i > arr.length; i++) {
		let key = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = key;
	}
	return arr;
}

console.log('Test: ', testDeeply(numbers));
