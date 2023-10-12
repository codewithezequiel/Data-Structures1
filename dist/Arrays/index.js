"use strict";
class CustomArray {
    data;
    length;
    constructor() {
        this.length = 0;
        this.data = [];
    }
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }
    pop() {
        let item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    insertAt(item, index) {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.data;
    }
    getElementAtIndex(index) {
        return this.data[index];
    }
}
const array = new CustomArray();
array.push(12);
array.push(13);
array.push(14);
array.push(10);
array.push(989);
console.log("Print element in an array");
for (let key in array.data) {
    console.log(array.data[key]);
}
console.log(array);
