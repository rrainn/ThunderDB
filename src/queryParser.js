module.exports = query => {
	const parts = query.toLowercase().split(" ");
	let validCommand = false;
	if (parts[0] === "select") {
		console.log("Select command being run");
		validCommand = true;
	} else if (parts[0] === "insert") {
		console.log("Insert command being run");
		validCommand = true;
	} else if (parts[0] === "create") {
		if (parts[0] === "db") {
			console.log("Create db command being run");
			validCommand = true;
		}
		if (parts[0] === "table") {
			console.log("Create table command being run");
			validCommand = true;
		}
		if (parts[0] === "document") {
			console.log("Create document command being run");
			validCommand = true;
		}
	}

	if (!validCommand) {
		console.error(`You have run an invalid command: ${query}`);
	}
};
