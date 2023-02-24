/* a program that rounds up numbers and calculates
 * the sum of the number
 */

const calculateNumber = (a, b) => {
	let roundedNumber1 = Math.ceil(a);
	let roundedNumber2 = Math.ceil(b);
	sum = roundedNumber1 + roundedNumber2;
	return sum;
};

module.exports = calculateNumber;
