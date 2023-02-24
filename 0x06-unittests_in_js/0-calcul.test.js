/* test for the calculateNumber function
 */
const calculateNumber = require('./0-calcul');
const assert = require('chai').assert;

describe('calculateNumber', function () {
	it('rounds a fractional number and calculates the sum', () => {
		assert.strictEqual(calculateNumber(1.5, 2.3), 5);
	});

	it('rounds a floating number and calculates the sum', () => {
		assert.strictEqual(calculateNumber(1.0, 2.0), 3);
	});

	it('rounds a floating and fractional number then sums it', () => {
		assert.strictEqual(calculateNumber(1.0, 2.5), 4);
	});
	
	it('rounds a fractional and a floating number then sums it', () => {
		assert.strictEqual(calculateNumber(1.5, 2.0), 4);
	});
});
