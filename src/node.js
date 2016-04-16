// var Basic = require("./basic.js");

var Node = Basic.extend({
	private: {
		init: function (val,node) {
			var value = val;
			var next = node instanceof Node ? node : null;
			this.getValue = function () {
				return value;
			};
			this.setValue = function (val) {
				value = val;
			};
			this.getNext = function () {
				return next;
			};
			this.setNext = function (node) {
				next = node;
			};
		}
	}
});