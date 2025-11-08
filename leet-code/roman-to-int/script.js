function romanToInt(s) {
	const romanNumerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;
	let preValue = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		const value = romanNumerals[s[i]];
		console.log(`Processing ${s[i]}: ${value}`);

		if (value < preValue) {
			total -= value;
			console.log(`Subtracting: New total = ${total}`);
		} else {
			total += value;
			console.log(`Adding: New total = ${total}`);
		}
		preValue = value;
	}
	return total;
}

// Example usage:
const romanString = 'MCMXCIV';
const result = romanToInt(romanString);
console.log(
	`The integer value of the Roman numeral ${romanString} is: ${result}`
);
