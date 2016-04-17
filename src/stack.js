var Stack = Basic.extend({
	private : {
		init : function (node) {
			var top = node instanceof Node ? node : null;
			this.getTop = function () {
				return top;
			};
			this.setTop = function (node) {
				top = node;
			};
		}
	},
	public : {
		push : function (val) {
			var node = new Node(val);
			if (this.getTop() == null) {
				this.setTop(node);
			} else {
				node.setNext(this.getTop());
				this.setTop(node);
			}
		},
		pop : function () {
			if (this.getTop() == null) {
				return undefined;
			} else {
				var top = this.getTop();
				this.setTop(top.getNext());
				return top.getValue();
			}
		}
	}
})