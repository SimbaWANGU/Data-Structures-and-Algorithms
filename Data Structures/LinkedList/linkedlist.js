"use strict";
class ListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new ListNode(element);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    addAt(element, index) {
        if (index < 0 || index > this.size) {
            return 'Invalid Index Position';
        }
        let newNode = new ListNode(element);
        let curr, prev;
        curr = this.head;
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let i = 0;
            curr = this.head;
            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }
            newNode.next = curr;
            prev.next = newNode;
        }
        this.size++;
    }
    removeAt() { }
    getSize() {
        return this.size;
    }
    getHead() {
        var _a, _b;
        return JSON.stringify({
            element: (_a = this.head) === null || _a === void 0 ? void 0 : _a.element,
            next: (_b = this.head) === null || _b === void 0 ? void 0 : _b.next
        });
    }
    remove(element) {
        let curr;
        let prev;
        curr = this.head;
        let i = 0;
        if ((curr === null || curr === void 0 ? void 0 : curr.element) === element) {
            this.head = curr === null || curr === void 0 ? void 0 : curr.next;
        }
        else {
            while ((curr === null || curr === void 0 ? void 0 : curr.element) !== element) {
                prev = curr;
                curr = curr === null || curr === void 0 ? void 0 : curr.next;
            }
            prev.next = curr === null || curr === void 0 ? void 0 : curr.next;
        }
        this.size--;
    }
    indexOf() { }
    elementAt() { }
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.addAt(5, 1);
linkedList.add(3);
linkedList.add(4);
linkedList.add(6);
linkedList.remove(1);
console.log(linkedList);
console.log('Size of the list is ' + linkedList.getSize());
console.log('Head of the list is ' + linkedList.getHead());
console.log(linkedList.head.next.next.next);
