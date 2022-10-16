let numberFour = parseInt(prompt('Put the number'));

for (let i = 2; i < numberFour; i++) {
	if (numberFour % i === 0) {
		console.log('не простое');
		break;
	}
	if (numberFour === i + 1) {
		console.log('простое');
	}
}
