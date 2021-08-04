const outputElement = document.getElementById("display-output");

function checkCollatz() {
	const input = document.getElementById("userinput").value;
	if(!input) return alert("You did not provide a number!");

	let inputBigInt = BigInt(input);

	let i = 1;

	const updating = setInterval(() => {
		if(i === 6) i = 1;
		outputElement.innerText = `Loading${".".repeat(i)}`;
		i++;
	}, 500);

	const steps = [];

	while(true) {
		console.log(inputBigInt);
		if(inputBigInt === 1n) break;
		if(inputBigInt % 2n === 0n) inputBigInt = inputBigInt / 2n;
		else inputBigInt = (inputBigInt * 3n) + 1n;

		steps.push(inputBigInt);
	}

	// This code executed after loop is over
	clearInterval(updating);
	outputElement.innerText = "";

	alert(`Number of interations taken: ${steps.length}`);
};