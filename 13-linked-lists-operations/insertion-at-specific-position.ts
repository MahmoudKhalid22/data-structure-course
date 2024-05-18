class CSNode {
  data: number;
  next: CSNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

// Define a class for a linked list
class CSLinkedList {
  head: CSNode | null;

  constructor() {
    this.head = null;
  }

  // Method to insert a new node at a given position
  insertAtPosition(data: number, position: number): void {
    const newNode = new CSNode(data);

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current: CSNode | null = this.head;
    let count = 1;
    while (current !== null && count < position - 1) {
      current = current.next;
      count++;
    }

    if (current === null) {
      console.log("Invalid position!");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Method to print the linked list
  printList(): void {
    let current: CSNode | null = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Main function
function main() {
  // Create a linked list with three nodes
  const linkedList = new CSLinkedList();
  linkedList.head = new CSNode(1);
  linkedList.head.next = new CSNode(2);
  linkedList.head.next.next = new CSNode(3);

  // Print the original linked list
  console.log("Original linked list:");
  linkedList.printList();

  // Insert a new node with data 4 at position 2
  linkedList.insertAtPosition(4, 2);

  // Print the updated linked list
  console.log("Updated linked list:");
  linkedList.printList();
}

// Call the main function
main();
