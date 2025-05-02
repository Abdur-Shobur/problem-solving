const array = [1, 9, 2, 6, 9, 345, 12, 6, 2, 4, 62, 346, 214, 345, 3452];

/*=====================
-  1 : Sort Array ascending and descending order
=======================*/

function ascDscSort(my_array = [], sort = 'asc') {
	let countJ = 0;
	const len = my_array.length;
	for (let i = 0; i < len - 1; i++) {
		console.log(i, 'i');
		for (let j = 0; j < len - 1 - i; j++) {
			console.log(j, 'j');
			countJ++;

			// if ascending
			if (sort === 'asc') {
				if (my_array[j] > my_array[j + 1]) {
					let temp = my_array[j];
					my_array[j] = my_array[j + 1];
					my_array[j + 1] = temp;
				}
			} else {
				// if descending
				if (my_array[j] < my_array[j + 1]) {
					let temp = my_array[j];
					my_array[j] = my_array[j + 1];
					my_array[j + 1] = temp;
				}
			}
		}
	}

	console.log(countJ);

	return my_array;
}
console.log(ascDscSort(array, 'asc'));

/*=====================
-  2 : Sort Array ascending and descending order first half
=======================*/

function firstHalfSort(my_array = []) {
	const len = my_array.length / 2;

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (my_array[j] > my_array[j + 1]) {
				let temp = my_array[j];
				my_array[j] = my_array[j + 1];
				my_array[j + 1] = temp;
			}
		}
	}

	return my_array;
}
// console.log(firstHalfSort(array));

/*=====================
-  3 : Count swap needed
=======================*/

function swapNeeded(my_array = []) {
	const len = my_array.length;
	let swap = 0;
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (my_array[j] > my_array[j + 1]) {
				swap++;
			}
		}
	}
	return swap;
}

// console.log(swapNeeded(array));

/*=====================
-  4 : Sorted early 
=======================*/

function sortedEarly(my_array = []) {
	const len = my_array.length;
	for (let i = 0; i < len - 1; i++) {
		let swapped = false;
		for (let j = 0; j < len - 1 - i; j++) {
			if (my_array[j] > my_array[j + 1]) {
				[my_array[j], my_array[j + 1]] = [my_array[j + 1], my_array[j]];

				swapped = true;
			}
		}

		if (!swapped) {
			console.log('stop', i + 1);
		}
	}

	return my_array;
}

// console.log(sortedEarly([1, 2, 3, 4]));

/*=====================
-  5 : k pass 
=======================*/

function kPass(my_array = [], k = 0) {
	const len = my_array.length;
	for (let i = 0; i < k && i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (my_array[j] > my_array[j + 1]) {
				let temp = my_array[j];
				my_array[j] = my_array[j + 1];
				my_array[j + 1] = temp;
			}
		}
	}

	return my_array;
}

// console.log(kPass(array, 3));
