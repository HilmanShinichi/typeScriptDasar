"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1, 2, 3);
// numbers.add(4)
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll())
let random = new List(1, "a", "b", 2);
random.add("hdkjd");
random.add(890);
random.addMultiple(321, "wq");
console.log(random.getAll());
