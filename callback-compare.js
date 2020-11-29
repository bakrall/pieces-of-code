(function() {
	function compare(a, b, cb) {
		const greater = a > b ? true : false;

		cb(greater);
	}

	function logResult(result) {
		result ? console.log("greater") : console.log("smaller");
	}

	compare(5, 3, logResult);
})();