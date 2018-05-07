const expect = require('chai').expect;
const thunderDB = require('../thunderDB');

describe("ThunderDB", function() {
	it("Should return a Class", function() {
		expect(thunderDB).to.be.a('class');
	});
});
