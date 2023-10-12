var MyStack = /** @class */ (function () {
    function MyStack(maxSize) {
        if (maxSize === void 0) { maxSize = MyStack.MAX_SAFE_INTEGER; }
        this.stack = [];
        this.maxSize = maxSize;
        this.top = -1;
    }
    // push an item onto the stack
    MyStack.prototype.push = function (item) {
        if (this.stack.length === this.maxSize - 1) {
            throw new Error("Stack overflow");
        }
        this.top++;
        this.stack[this.top] = item;
    };
    MyStack.prototype.pop = function () {
        if (this.stack.length === 0) {
            throw new Error("Stack underflow");
        }
        var item = this.stack[this.top];
        this.top--;
        return item;
    };
    MyStack.prototype.peek = function () {
        if (this.stack.length === 0)
            return undefined;
        return this.stack[this.top];
    };
    MyStack.prototype.isEmpty = function () {
        return this.top === -1;
    };
    MyStack.prototype.isFull = function () {
        return this.top === this.maxSize - 1;
    };
    MyStack.prototype.size = function () {
        return this.top + 1;
    };
    MyStack.prototype.clear = function () {
        this.stack = [];
        this.top = -1;
    };
    MyStack.MAX_SAFE_INTEGER = 99999;
    return MyStack;
}());
// Example usage:
var stack = new MyStack(5); // Create a stack with a maximum size of 5
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true
