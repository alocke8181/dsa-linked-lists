/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.tail){
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    else{
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head){
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    else{
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head == null || this.tail == null){
      throw "Linked List is empty!";
    }
    else{
      let currentNode = this.head;
      if(this.head == this.tail){
        this.head = null;
        this.tail = null;
        this.length--;
        return currentNode.val;
      }
      else{
        while(currentNode.next.next){
          currentNode = currentNode.next;
        }
        let val = currentNode.next.val;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return val;
      }
    }
  }
  

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head || !this.tail){
      throw "Linked List is empty!";
    }
    if(this.head == this.tail){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    else{
      let firstNode = this.head;
      this.head = firstNode.next;
      firstNode.next = null;
      this.length--;
      return firstNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for(let i = 0; i< idx; i++){
      if(currentNode.next){
        currentNode = currentNode.next;
      }
      else{
        throw "Linked List index out of bounds!";
      }
    }
    return currentNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx > this.length){
      throw "Linked List index out of bounds!";
    }
    let currentNode = this.head;
    for(let i = 0; i<idx; i++){
      if(currentNode.next){
        currentNode = currentNode.next;
      }
    }
    currentNode.val = val;
    return currentNode;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length){
      throw "Linked List index out of bounds!";
    }
    else if(idx == 0){
      this.unshift(val);
      return;
    }
    else if(idx == this.length){
      this.push(val);
      return;
    }
    else{
      let currentNode = this.head;
      let newNode = new Node(val);
      for (let i = 0; i<idx-1; i++){
        if(currentNode.next){
          currentNode = currentNode.next;
        }
      }
      let oldNext = currentNode.next;
      newNode.next = oldNext;
      currentNode.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    if (this.head == this.tail){
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    for (let i = 0; i<idx-1; i++){
      if(currentNode.next){
        currentNode = currentNode.next;
      }
      else{
        throw "Linked List index out of bounds!";
      }
    }
    let removeNode = currentNode.next;
    let newNextNode = removeNode.next;
    currentNode.next = newNextNode;
    removeNode.next = null;
    this.length--;
    return removeNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let num = 0;
    let currentNode = this.head;
    if (!currentNode){
      return 0;
    }
    while(currentNode){
      sum = sum + currentNode.val;
      num++;
      currentNode = currentNode.next;
    }
    return sum/num;
  }
  printAll(){
    let currentNode = this.head;
    while(currentNode){
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}


