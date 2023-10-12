class MyNode<T> {
    data: T;
    next: MyNode<T> | null;
    
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList<T> {
    private head: MyNode<T> | null;
    private tail: MyNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add an element to the end of the linked List
    addLast(element: T): void {
        const newNode = new MyNode(element);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
    }

    insertAtIndex(index: number, element: T): void {
        if (index < 0)
            throw new Error("Index must be non-negative")
        
        const newNode = new MyNode(element);
        
        if (index === 0) {
            this.head!.next = this.head;
            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode
            }
            return;
        }

        let current = this.head;
        let currentIndex = 0;

        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }

        // first condition becomes falsy
        if (current === null) {
            throw new Error("Index out of bounds")
        }

        // second condition becomes falsy
        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode
        }
    }

    prepend(element: T) {
        const newNode = new MyNode(element);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // remove and return the first element in the linked list.

    removeFirst(): T | undefined {
        if (!this.head) return undefined

        const data = this.head.data;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null
        }
        return data;
    }

    size(): number {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    removeAtIndex(index: number): T | undefined {
        if (index < 0) {
            throw new Error("Index must be non-negative");
        }

        if (index === 0)
            return this.removeFirst();
        
        let current = this.head;
        let currentIndex = 0;

        while (current !== null && currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }

        if (current === null || current.next === null) {
            throw new Error("Index out of bounds")
        }

        const data = current.next.data;
        current.next = current.next.next
        
        if (current.next === null)
            this.tail = current;
        
        return data
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    print(): void {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new MyLinkedList<number>();
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.prepend(5)
linkedList.insertAtIndex(2, 10);
linkedList.removeAtIndex(1);
// console.log(linkedList.size()); // Output: 3
// console.log(linkedList.removeFirst()); // Output: 1
console.log(linkedList.size());
console.log("---------------")
linkedList.print(); // Output: 2 3

