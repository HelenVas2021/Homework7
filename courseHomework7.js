//Задача №1

let ArrayOne = [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1];

console.log(ArrayOne);



function counts(a) {
	let sums = [];
	let sum = 1;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i + 1]) {
			sum++;
		} else {
			sums.push(sum);
			sum = 1;
		}
	}
	return sums
}
console.log(counts(ArrayOne));









