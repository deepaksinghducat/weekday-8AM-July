function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}


// console.log(add(10,20));



function* task(a,b) {
	const addition = yield add(10,20);
	yield subtract(10,20);

	return addition;

	yield multiply(10,20);
}

const generator = task(10,20);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator);



// for (const iterator of generator) {
// 	console.log(iterator);
// }