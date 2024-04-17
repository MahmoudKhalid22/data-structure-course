class Stack {
  private top = -1;
  private arr: unknown[] = [];

  isEmpty() {
    return this.top === -1;
  }
  getTop() {
    if (this.isEmpty()) {
      return;
    }
    return this.top;
  }
  getTopEl(): unknown | undefined {
    if (this.isEmpty()) {
      return;
    }
    return this.arr[this.top];
  }
  add(...args: unknown[]) {
    this.top = this.top + args.length;
    this.arr = [...this.arr, ...args];
  }
  delete() {
    if (this.top === -1) return;
    this.top--;
    this.arr.pop();
  }
  gatWholeStack() {
    return this.arr;
  }
}

const s1 = new Stack();

console.log(s1.isEmpty()); // true
console.log(s1.getTop()); // undefined

s1.add("mahmoud", "ahmad", "ali");
console.log(s1.isEmpty()); // false
console.log(s1.getTop()); // 2 (since there are 3 elements added)

s1.delete();
console.log(s1.getTopEl()); // "ahmad"
console.log(s1.gatWholeStack()); // ["mahmoud", "ahmad"]

s1.add("ali", 1, "hey", 6);
console.log(s1.getTopEl()); // 6
console.log(s1.gatWholeStack()); // ["mahmoud", "ahmad", "ali", 1, "hey", 6]

s1.delete();
console.log(s1.getTopEl()); // "hey"
console.log(s1.gatWholeStack()); // ["mahmoud", "ahmad", "ali", 1, "hey"]
