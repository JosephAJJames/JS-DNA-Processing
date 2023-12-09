"use strict";

const testlib = require('./testlib.js');

let dataTable = []
let freqTable = {};

testlib.on('ready', (patterns) => {

	console.log("Patterns:", patterns);

	testlib.runTests();
});

testlib.on('data', (data) => {
	dataTable.push(data);
});

testlib.on('end', (dataTable) => {
	dataTable.array.forEach((element, index) => {
		if (!(index == 0)) { //not the first element

		} else { //first element

		}
	});

})


testlib.setup(1); // Runs test 1 (task1.data and task1.seq)
