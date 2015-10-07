function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function(element) {
    var node = new Node(element);
    var current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };
  this.insert = function(position, element) {};
  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element) {};
  this.indexOf = function(element) {};
  this.isEmpty = function() {};
  this.size = function() {};
  this.toString = function() {};
  this.print = function() {};
}

var list = new LinkedList();
list.append(5);
list.append(10);
