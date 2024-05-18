class CNode {
  data: number;
  next: CNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class CLinkedList {
  head: CNode | null;
  constructor() {
    this.head = null;
  }
  insertAtEnd(data: number): void {
    const newNode = new CNode(data);
    if (this.head === null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let temp: CNode | null = this.head;
      while (temp.next !== null) {
        temp.next = temp.next;
      }
      // @ts-ignore
      if (temp.next === null) (temp as CNode).next = newNode;
    }
  }

  printList(): void {
    let currentNode = this.head;
    while (currentNode !== null) {
      process.stdout.write(`${currentNode.data}->`);
      currentNode = currentNode.next;
    }
    console.log("NULL");
  }
}

// Main logic
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter Number of Nodes: ", (input: string) => {
  const n = parseInt(input);
  const linkedList = new CLinkedList();
  let count = 0;

  const getNodeValue = () => {
    if (count < n) {
      readline.question(
        `Enter the Node ${count + 1} Value: `,
        (value: string) => {
          linkedList.insertAtEnd(parseInt(value));
          count++;
          getNodeValue();
        }
      );
    } else {
      linkedList.printList();
      readline.close();
    }
  };

  getNodeValue();
});
