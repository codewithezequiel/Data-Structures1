// class CustomArray {
//     data: number[];
//     length: number;

//    // Create constructor
//    constructor() { 
//     // It store the length of array.
//     this.length = 0;
     
//     // Object to store elements.
//     this.data = [];
//    }
//     // insert method
//    push(element: number) {
//     this.data[this.length] = element;
//     this.length++;
//     return this.data;
//    }
//     // remove method
//    pop() {
//     let item = this.data[this.length-1];
//     delete this.data[this.length-1];
//     this.length--;
//     return this.data;
//    }
//     // insertAt method
//    insertAt(item: number, index: number) {
//     for (let i = this.length; i >= index; i--) {
//         this.data[i] = this.data[i - 1];
//     }
//     this.data[index] = item;
//     this.length++;
//     return this.data;
//    }
//     // getElement method
//    getElementAtIndex(index:number) {
//     return this.data[index];
//    }
    
// }

// Array class from GPT

class CustomArray<T> {
    private data: T[] = [];

    // Add an element to this array;
    push(item: T): void {
        this.data[this.data.length] = item;
    }

    // Remove and return the last element in the array
    pop(): T | undefined {
        if (this.data.length === 0)
            return undefined;
        
        const lastItem = this.data[this.data.length - 1];
        this.data.length--;
        return lastItem;
    }

    // Get element at a specific index.
    get(index: number): T | undefined{
        if (index < 0 || index >= this.data.length)
            return undefined;
        
        return this.data[index];
    }

    // Set the element at a specific index
    set(element: T, index: number): void {
        // [0,1,2]
        if (index < 0 || index >= this.data.length)
            throw new Error("Index out of bounds")
        this.data[index] = element;
    }
    // Get the current length of the array
    length(): number {
        return this.data.length;
    }

    // Check if array is empty
    isEmpty(): boolean {
        return this.data.length === 0;
    }

    print(): T[] {
        // for (const item of this.data)
        //     console.log(item);
        return this.data;
    }
}


// We are instantiating an object of Array class
const array = new CustomArray<number>();
 
// Pushing element
array.push(12);
array.push(13);
array.push(14);
array.push(989);

console.log(array.length())

console.log(array.print());
