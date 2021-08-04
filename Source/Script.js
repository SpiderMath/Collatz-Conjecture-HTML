const outputElement = document.getElementById("display-output");

function checkCollatz() {
	const input = document.getElementById("userinput").value;
	if(!input) return alert("You did not provide a number!");

	let inputBigInt;

	try {
		inputBigInt = BigInt(input);
	}
	catch {
		if(!inputBigInt) return alert("Invalid number provided");
	}

	const clone = inputBigInt;

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

	const sortedDataset = steps.sort((a, b) => {
		const val = a - b;

		if(a - b === 0n) return 0;
		else if(val > 0n) return 1;
		else return -1;
	})

	const template = `
		<p>Number of Iterations: <b>${steps.length}</b></p>
		<p>Highest Value: <b>${sortedDataset[sortedDataset.length - 1]}</b></p>
		<p>Steps:</p>
	`;

	outputElement.innerHTML = template;

	// alert(`Number of interations taken: ${steps.length}`);
};