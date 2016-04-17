var NodeList = Basic.extend({
	private : {
		init : function () {
			//private
			var head,tail;
			head = tail = new Node();
			this.getHead = function () {
				return head;
			};
			this.getTail = function () {
				return tail;
			};
			this.setHead = function (node) {
				head = node;
			}
			this.setTail = function (node) {
				tail = node;
			};
		}
	},
	public : {
		add : function (val) {
			var node = new Node(val);
			var tail = this.getTail();
			tail.setNext(node);
			this.setTail(node);
		},
		find : function (val) {
			var temp = this.getHead().getNext();
			while (temp != null) {
				if (val == temp.getValue()) {
					return true;
				}
				temp = temp.getNext();
			}
			return false;
		},
		remove : function (val) {
			var temp = this.getHead();
			while (temp != null && temp.getNext() != null) {
				if (val == temp.getNext().getValue()) {
					this.setTail(temp.getNext() == this.getTail() ? temp : this.getTail());
					temp.setNext(temp.getNext().getNext());
				}
				temp = temp.getNext();
			}
		},
		size : function () {
			var head = this.getHead();
			var tail = this.getTail();
			var length = 0;
			while(head != tail) {
				length++;
				head = head.getNext();
			}
			return length;
		}
	}
})