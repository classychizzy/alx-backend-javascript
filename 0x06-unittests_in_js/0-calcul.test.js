/* test for the calculateNumber function
 */
const calculateNumber = require('./0-calcul');
const expect = require('chai').expect;

describe('calculateNumber', function () {
	it('rounds a fractional number and calculates the sum', () => {
		expect(calculateNumber(1.5, 2.3)).equal(5);
	});

	it('rounds a floating number and calculates the sum', () => {
		expect(calculateNumber(1.0, 2.0)).equal(3);
	});
});
