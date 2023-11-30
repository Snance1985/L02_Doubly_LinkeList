// Node
class Node {
    constructor(data, next = null, prev = null) {
      this.element = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  // List
  class DoubleLinkedList {
    constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  
    // Add element to end of list
    add(element) {
      const node = new Node(element);
  
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
  
      this.length++;
    }
  
    // Print list elements
    print() {
      let current = this.head;
      let result = '';
  
      while (current) {
        result += current.element + ' ';
        current = current.next;
      }
  
      console.log(result.trim());
    }
  }
  
  // Example usage
  const list = new DoubleLinkedList

  

