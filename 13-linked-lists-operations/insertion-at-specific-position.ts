class CSNode {
  data: number;
  next: CSNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class CSLinkedList {
  head: CSNode | null;
  constructor() {
    this.head = null;
  }
}
