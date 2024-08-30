//votre code ici
function pairNumbers(firstNumber, lastNumber) {
	let evenNumbers = [];

	for (let i = firstNumber; i <= lastNumber; i++) {
		if (i % 2 == 0) {
			evenNumbers.push(i);
		}
	}

	return evenNumbers.join(",");
}

export default pairNumbers;
