//Task 2
let dollar = 27;
let total = 0;
for (let i = 10; i <= 100; i = i + 10) {
	total = i / dollar;
	document.write(total.toFixed(2) + '; ');
}