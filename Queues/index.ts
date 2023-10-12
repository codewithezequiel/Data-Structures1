class MyQueue<T> {
    private queue: T[];
    private maxSize: number;
    private front: number;
    private rear: number;

    private static readonly MAX_SAFE_INTEGER = 99999;

    constructor(maxSize: number = MyQueue.MAX_SAFE_INTEGER) {
        this.queue = [];
        this.maxSize = maxSize;
        this.front = -1;
        this.rear = -1;
    }

    // enqueue: means to add an element at the rear of the queue
    enqueue(element: T): void | undefined {
        if (this.queue.length === this.maxSize - 1) 
            throw new Error("Queue overflow")
        
        // if Queue is empty
        if (this.front === -1) {
            this.front = 0
        }

        this.rear++;
        this.queue[this.rear] = element;
    }

    dequeue(): T | undefined {
        if (this.front === -1) {
            throw new Error("Queue underflow")
        }

        const item = this.queue[this.front];

        if (this.front === this.rear) {
            // if there is only one element,reset front and rear
            this.front = -1;
            this.rear = -1;
        }
        else { this.front++ };
        return item;
    }

     // Peek at the element at the front of the queue without removing it.
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[this.front];
  }

  // Check if the queue is empty.
  isEmpty(): boolean {
    return this.front === -1;
  }

  // Check if the queue is full.
  isFull(): boolean {
    return this.rear === this.maxSize - 1;
  }
    
     // Get the current size of the queue.
  size(): number {
    if (this.isEmpty()) {
      return 0;
    }
    return this.rear - this.front + 1;
  }

  // Clear the queue.
  clear(): void {
    this.queue = [];
    this.front = -1;
    this.rear = -1;
  }

}

// Example usage:
const queue = new MyQueue<number>(7); // Create a queue with a maximum size of 5

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