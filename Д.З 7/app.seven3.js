//Task3
let number3 = parseInt(prompt('Put the number'));
for (let i = 1; i <= 100; i++) {
	if (i * i <= number3) {
		document.write('Целое число ' + i + '; ' + 'Квадрат числа ' + i * i + '<br>');
	}
}
