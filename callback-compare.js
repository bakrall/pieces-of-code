(function() {
	function compare(a, b, cb) {
		const greater = a > b ? true : false;

		cb(greater);
	}

	function logResult(result) {
		if (result) {
			console.log("greater");
		} else {
			console.log("smaller");
		}
	}

	compare(5,3,logResult);
})();