function bonjour() {
	const button = document.querySelector("#myButton");
	const textBox = document.querySelector("#helloBox");

	button.addEventListener("click", (event) => {
		event.preventDefault();
		textBox.textContent = "Bonjour, vous avez cliqué sur le bouton !";
	});
}

bonjour();
