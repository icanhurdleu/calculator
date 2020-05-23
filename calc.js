const numWindow = document.getElementById('num-window');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const div = document.getElementById('div');
const plusMinus = document.getElementById('plus-minus');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const decimal = document.getElementById('decimal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

let prevNum = undefined;
let currentNum = undefined;
let currentOperator = undefined;
let operatorUsed = false;

// const numKeys = document.querySelectorAll('.num');
// numKeys.forEach(numKey => numKey.addEventListener('click', testFunc));

function updateWindow(num) {
	if (numWindow.innerHTML == "0" || operatorUsed) {
		numWindow.innerHTML = num;
		operatorUsed = false;
	} else {
		numWindow.innerHTML += num;
	}
}

equals.addEventListener('click', function() {
	currentNum = numWindow.innerHTML;
	operatorUsed = true;
	switch (currentOperator) {
		case 'plus':
			numWindow.innerHTML = add(prevNum*1, currentNum*1);
			prevNum = numWindow.innerHTML;
			currentOperator = undefined;
			break;
		case 'minus':
			numWindow.innerHTML = subtract(prevNum*1, currentNum*1);
			prevNum = numWindow.innerHTML;
			currentOperator = undefined;
			break;
		case 'divider':
			numWindow.innerHTML = divide(prevNum, currentNum);
			prevNum = numWindow.innerHTML;
			currentOperator = undefined;
			break;
		case 'multiplier':
			numWindow.innerHTML = multiply(prevNum, currentNum);
			prevNum = numWindow.innerHTML;
			currentOperator = undefined;
			break;
	}
});

plus.addEventListener('click', function() {
	prevNum = numWindow.innerHTML;
	operatorUsed = true;
	currentOperator = 'plus';
});
minus.addEventListener('click', function() {
	prevNum = numWindow.innerHTML;
	operatorUsed = true;
	currentOperator = 'minus';
});
times.addEventListener('click', function() {
	prevNum = numWindow.innerHTML;
	operatorUsed = true;
	currentOperator = 'multiplier';
});
div.addEventListener('click', function() {
	prevNum = numWindow.innerHTML;
	operatorUsed = true;
	currentOperator = 'divider';
});

function add (a, b) {
	return 	a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
	return a * b;
}

function divide (a, b) {
	return a / b;
}

function changeSign() {
	if (numWindow.innerHTML.indexOf('-') == 0) {
		numWindow.innerHTML = numWindow.innerHTML.substr(1, numWindow.innerHTML.length);
	} else {
		let existing = numWindow.innerHTML;
		numWindow.innerHTML = '-' + existing;
	}
}

function decimalPt() {
	if (numWindow.innerHTML.indexOf('.') > 0) {
		return;
	} else {
		numWindow.innerHTML += '.';
	}
}

function delNum() {
	if (numWindow.innerHTML.length == 1) {
		numWindow.innerHTML = '0';
	} else {
		numWindow.innerHTML = numWindow.innerHTML.substr(0, numWindow.innerHTML.length - 1);
	}
}

function clearWindow() {
	numWindow.innerHTML = '0';
}

plusMinus.addEventListener('click', () => {
	changeSign();
});

clear.addEventListener('click', () => {
	clearWindow();
	prevNum = undefined;
	currentNum = undefined;
});

del.addEventListener('click', () => {
	delNum();
});

one.addEventListener('click', () => {
	updateWindow('1');
});
two.addEventListener('click', () => {
	updateWindow('2');
});
three.addEventListener('click', () => {
	updateWindow('3');
});
four.addEventListener('click', () => {
	updateWindow('4');
});
five.addEventListener('click', () => {
	updateWindow('5');
});
six.addEventListener('click', () => {
	updateWindow('6');
});
seven.addEventListener('click', () => {
	updateWindow('7');
});
eight.addEventListener('click', () => {
	updateWindow('8');
});
nine.addEventListener('click', () => {
	updateWindow('9');
});
zero.addEventListener('click', () => {
	updateWindow('0');
});
decimal.addEventListener('click', () => {
	decimalPt();
});