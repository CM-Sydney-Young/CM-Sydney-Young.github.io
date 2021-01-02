function add(a,b){
	var result = a+b;
	var addR = 'The sum of'+ a + '*' + b +'is'+ result;
	return addR;
}


function addFxn(a,b){
	var addResult = 0;
	addResult = 'The sum of'+ a + 'and' + b +'is'+ (a+b);
	return addResult;
};

function minusFxn(a,b){
	var minusResult = 0;
	minusResult = 'The result of'+ a + '-' + b +'is'+ (a-b);
	return minusResult;
};

function multFxn(a,b){
	var multResult = 0;
	multResult = 'The result of'+ a + '*' + b +'is'+ (a*b);
	return multResult;
};

function dFxn(a,b){
	var dResult = 0;
	dResult = 'The result of'+ a + '/' + b +'is'+ (a/b);
	return dResult;
};

var basicMath= {
	add:addFxn,
	substract:minusFxn,
	multiply:multFxn,
	divide:dFxn
};

console.log(basicMath.add(10,21)); // The sum of 10 and 21 is 31
console.log(basicMath.substract(10,21)); // The result of 21 minus 10 is 11
console.log(basicMath.multiply(5,17)); // The oriduct of 5 and 17 is 85
console.log(basicMath.divide(80,4)); // The result of 80/4 is 20.