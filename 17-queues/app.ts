class Queue {
  private front: number;
  private rear: number;
  private count: number;
  private arr: any[];
  constructor() {
    this.front = 0;
    this.arr = [];
    this.rear = -1;
    this.count = this.arr.length;
  }
  isEmpty() {
    return this.count === 0;
  }
  isFull() {
    return this.count === this.arr.length;
  }

  enqueue(arg: number) {
    this.rear = (this.rear + 1) % this.arr.length;
    this.arr[this.rear] = arg;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is Empty";
    const removedItem = this.arr[this.front];
    this.front = (this.front + 1) % this.arr.length;
    this.count--;
  }

  getFront() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.arr[this.front];
  }
  getRear() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.arr[this.rear];
  }
  getCount() {
    return this.count;
  }
}

const myQueue = new Queue();
// console.log(myQueue.isEmpty());
// console.log(myQueue.isFull());

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// console.log(myQueue.isEmpty());
// console.log(myQueue.getCount());
myQueue.dequeue(); // Output: 1
// console.log(myQueue.getCount());
console.log(myQueue.getFront()); // Output: 2
console.log(myQueue.getRear()); // Output: 3
