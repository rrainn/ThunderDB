const expect = require('chai').expect;
const thunderDB = require('../thunderDB');

const db = new thunderDB("myCoolDB", ".");

describe("Creation", function() {
	it("Should construct properly", function() {
		expect(db).to.have.property('fp', '.');
	});
});

describe("Methods", function() {
	it("Should run a method", function() {
		expect(db.test(1)).to.equal(1);
	});
});
