const getSynonym = require("../utils/getSynonym");

const synonym = (yargs) => {
	return yargs.command({
		command: "synonym",
		describe: "Displays one or more synonyms of a word",
		builder: {
			word: {
				describe: "The word whose synonym would be displayed",
				demandOption: true,
				type: "string",
				alias: "w",
			},
			number: {
				describe: "The number of synonyms to display. Defaults to one",
				type: "number",
				demandOption: true,
				alias: "n",
			},
		},
		handler: async (argv) => {
			// try {
			// 	console.log(await getSynonym(argv.word));
			// } catch (err) {
			// 	console.log("something went wrong");
			// }
			console.log(getSynonym(argv.word, argv.number));
		},
	});
};

module.exports = synonym;
