// var Basic = module.exports = function () {};
var Basic = function () {}

Basic.extend = function (prop) {
	function Basic () {
		if (typeof this.init == "function")
			this.init.apply(this,arguments);
	};
	
	var prototype = new this();

	prototype.constructor = Basic;

	for(var name in prop) {
		if (name == "public" || name == "private") {
			for (var pname in prop[name]) {
				prototype[pname] = prop[name][pname];
			}
		} else if (name == "static") {
			for (var pname in prop[name]) {
				Basic[pname] = prop[name][pname];
			}
		}
	}


	Basic.prototype = prototype;

	Basic.extend = arguments.callee;

	return Basic;
}