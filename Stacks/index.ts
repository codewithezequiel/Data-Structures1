class MyStack<T> {
    private stack: T[];
    private maxSize: number;
    private top: number;

    private static readonly MAX_SAFE_INTEGER: number = 99999;

    constructor(maxSize: number = MyStack.MAX_SAFE_INTEGER) {
        this.stack = [];
        this.maxSize = maxSize;
        this.top = -1; 
    }

    // push an item onto the stack
    push(item: T): void {
        if (this.stack.length === this.maxSize - 1) {
            throw new Error("Stack overflow")
        }

        this.top++;
        this.stack[this.top] = item;
    }

    pop(): T | undefined {
        if (this.stack.length === 0) {
            throw new Error("Stack underflow")
        }
        
        const item = this.stack[this.top];
        this.top--;
        return item;
    }

    peek(): T | undefined {
        if (this.stack.length === 0)
            return undefined;
        
        return this.stack[this.top]
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    isFull(): boolean {
        return this.top === this.maxSize - 1;
    }

    size(): number {
        return this.top + 1;
    }

    clear(): void {
        this.stack = [];
        this.top = -1;
    }
}

// Example usage:
const stack = new MyStack<number>(5); // Create a stack with a maximum size of 5

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2

stack.clear();
console.log(stack.isEmpty()); // Output: true