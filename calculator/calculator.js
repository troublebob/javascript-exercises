function add (a,b) {
	return a+b
}

function subtract (a,b) {
	return a-b
}

function sum (a) {
	return a.reduce((x, y) => x + y, 0)
}

function multiply (a) {
	return a.reduce(function(x,y){return x*y;});
}

function power(a,b) {
	let total = 1
	for(let i=0; i<b; i++){
		total*=a
	}
	return total
}

function factorial(a) {
	let total = 1
	for(a;a>0;a--){
		total*=a
	}
	return total
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}