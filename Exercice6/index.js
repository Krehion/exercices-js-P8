function appendToDisplay(value) {
	const display = document.getElementById("display");
	display.value += value;
}

function clearDisplay() {
	const display = document.getElementById("display");
	display.value = "";
}

function calculateResult() {
	const display = document.getElementById("display");
	if (/\/0/.test(display.value)) {
		display.value = "Division by zero is not allowed";
	} else {
		display.value = eval(display.value);
	}
}
