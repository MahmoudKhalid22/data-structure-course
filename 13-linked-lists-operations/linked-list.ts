class linkedListNode {
  data: number;
  next: linkedListNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: linkedListNode | null;

  constructor() {
    this.head = null;
  }

  insertAtBeginning(item: number): void {
    const newNode: linkedListNode | null = new linkedListNode(item);
    newNode.next = this.head;
    this.head = newNode;
    console.log("New Node inserted");
  }

  printList(): void {
    let currentNode = this.head;
    while (currentNode !== null) {
      process.stdout.write(`${currentNode.data} `);
      currentNode = currentNode.next;
    }
    console.log(); // For newline after the list is printed
  }
}

const linkedList = new LinkedList();
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter New Node value: ", (input: string) => {
  const item = parseInt(input);
  linkedList.insertAtBeginning(item);
  linkedList.printList();
  readline.close();
});
