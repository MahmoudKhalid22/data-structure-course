class StackNode<T> {
  data: T;
  next: StackNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

// class LinkedStack<T> {
//   private top: StackNode<T> | null;

//   constructor() {
//     this.top = null;
//   }

//   isEmpty(): boolean {
//     return this.top === null;
//   }

//   push(data: T): void {
//     const newNode = new StackNode(data);
//     if (this.isEmpty()) {
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//   }

//   pop(): T | null {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const data = this.top!.data;
//     this.top = this.top!.next;
//     return data;
//   }

//   peek(): T | null {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.top!.data;
//   }

//   printStack(): void {
//     let current = this.top;
//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// // Example usage:
// const stack = new LinkedStack<number>();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log("Top of stack:", stack.peek()); // Output: 3
// stack.pop();
// console.log("Top of stack after pop:", stack.peek()); // Output: 2
// stack.printStack(); // Output: 2 1

// class StackNode<GenericType> {
//   value: GenericType;
//   next: StackNode<GenericType> | null;
//   constructor(data: GenericType) {
//     this.value = data;
//     this.next = null;
//   }
// }

class LinkedStack<GenericType> {
  top: StackNode<GenericType> | null;
  constructor() {
    this.top = null;
  }
  isEmpty(): boolean {
    return this.top === null;
  }
  getTop() {
    if (this.isEmpty()) return null;
    return this.top!.value;
  }
  getTopEl() {
    if (this.isEmpty()) return null;
    return this.top?.value;
  }
  addItem(item: GenericType) {
    const newItem = new StackNode(item);
    if (this.isEmpty()) this.top = newItem;
    newItem.next = this.top;
    this.top = newItem;
  }
  pop(): void | null {
    if (this.isEmpty()) {
      return null;
    }
    let x: GenericType | null = this.top!.value;
    this.top = this.top!.next;
    x = null;
  }
  //   printStack(): void {
  //     let current = this.top;
  //     while (current !== null) {
  //       console.log(current.value);
  //       current = current.next;
  //     }
  //   }
}
const s = new LinkedStack();

console.log(s.getTop());
s.addItem("mahmoud");
console.log(s.getTop());
s.addItem("ahmad");
s.pop();
console.log(s.getTop());
s.addItem("Ibraheem");
s.addItem("Adel");
s.addItem("elmy");
console.log(s.getTop());
console.log(s.printStack());
