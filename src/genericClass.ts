class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// let numbers = new List<number>(1, 2, 3);
// numbers.add(4)
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll())

let random = new List<number | string>(1, "a", "b", 2);
random.add("hdkjd");
random.add(890);
random.addMultiple(321, "wq");
console.log(random.getAll());
