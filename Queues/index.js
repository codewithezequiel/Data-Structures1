var MyQueue = /** @class */ (function () {
    function MyQueue(maxSize) {
        if (maxSize === void 0) { maxSize = MyQueue.MAX_SAFE_INTEGER; }
        this.queue = [];
        this.maxSize = maxSize;
        this.front = -1;
        this.rear = -1;
    }
    // enqueue: means to add an element at the rear of the queue
    MyQueue.prototype.enqueue = function (element) {
        if (this.queue.length === this.maxSize - 1)
            throw new Error("Queue overflow");
        // if Queue is empty
        if (this.front === -1) {
            this.front = 0;
        }
        this.rear++;
        this.queue[this.rear] = element;
    };
    MyQueue.prototype.dequeue = function () {
        if (this.front === -1) {
            throw new Error("Queue underflow");
        }
        var item = this.queue[this.front];
        if (this.front === this.rear) {
            // if there is only one element,reset front and rear
            this.front = -1;
            this.rear = -1;
        }
        else {
            this.front++;
        }
        ;
        return item;
    };
    // Peek at the element at the front of the queue without removing it.
    MyQueue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[this.front];
    };
    // Check if the queue is empty.
    MyQueue.prototype.isEmpty = function () {
        return this.front === -1;
    };
    // Check if the queue is full.
    MyQueue.prototype.isFull = function () {
        return this.rear === this.maxSize - 1;
    };
    // Get the current size of the queue.
    MyQueue.prototype.size = function () {
        if (this.isEmpty()) {
            return 0;
        }
        return this.rear - this.front + 1;
    };
    // Clear the queue.
    MyQueue.prototype.clear = function () {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    };
    MyQueue.MAX_SAFE_INTEGER = 99999;
    return MyQueue;
}());
// Example usage:
var queue = new MyQueue(7); // Create a queue with a maximum size of 5
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
queue.clear();
console.log(queue.isEmpty()); // Output: true
