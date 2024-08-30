function convertToBinary() {
	const userInput = document.getElementById("decimalInput");
	const value = userInput.value.trim();
	resultContainer = document.getElementById("binaryResult");

	if (/^-?\d+$/.test(value)) {
		const decimalNumber = parseInt(value, 10); // convert string to number
		const binaryResult = decimalNumber.toString(2); // built-in method to convert decimal to binary, base 2 (digits are 1 and 0)
		resultContainer.textContent = binaryResult;
	} else {
		// If the input is not a valid number, display nothing
		resultContainer.textContent = "";
	}
}
