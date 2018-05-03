const expect = require('chai').expect;
const query = require('../src/queryParser.js');

describe("Query", function() {
	it("Should return a function", function() {
		expect(query).to.be.a('function');
	});
});
