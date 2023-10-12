var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.data = data;
        this.next = null;
    }
    return MyNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    // Add an element to the end of the linked List
    MyLinkedList.prototype.addLast = function (element) {
        var newNode = new MyNode(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    };
    MyLinkedList.prototype.insertAtIndex = function (index, element) {
        if (index < 0)
            throw new Error("Index must be non-negative");
        var newNode = new MyNode(element);
        if (index === 0) {
            this.head.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
            }
            return;
        }
        var current = this.head;
        var currentIndex = 0;
        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        // first condition becomes falsy
        if (current === null) {
            throw new Error("Index out of bounds");
        }
        // second condition becomes falsy
        newNode.next = current.next;
        current.next = newNode;
        if (newNode.next === null) {
            this.tail = newNode;
        }
    };
    MyLinkedList.prototype.prepend = function (element) {
        var newNode = new MyNode(element);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    };
    // remove and return the first element in the linked list.
    MyLinkedList.prototype.removeFirst = function () {
        if (!this.head)
            return undefined;
        var data = this.head.data;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        return data;
    };
    MyLinkedList.prototype.size = function () {
        var count = 0;
        var current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    };
    MyLinkedList.prototype.removeAtIndex = function (index) {
        if (index < 0) {
            throw new Error("Index must be non-negative");
        }
        if (index === 0)
            return this.removeFirst();
        var current = this.head;
        var currentIndex = 0;
        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }
        if (current === null || current.next === null) {
            throw new Error("Index out of bounds");
        }
        var data = current.next.data;
        current.next = current.next.next;
        if (current.next === null)
            this.tail = current;
        return data;
    };
    MyLinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    MyLinkedList.prototype.print = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    };
    return MyLinkedList;
}());
// Example usage:
var linkedList = new MyLinkedList();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.prepend(5);
linkedList.insertAtIndex(2, 10);
linkedList.removeAtIndex(1);
// console.log(linkedList.size()); // Output: 3
// console.log(linkedList.removeFirst()); // Output: 1
console.log(linkedList.size());
console.log("---------------");
linkedList.print(); // Output: 2 3
