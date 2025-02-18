class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    print(): void {
        console.log(this.items.join(" → "));
    }
}

 
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();  // Output: 10 → 20 → 30
console.log(stack.pop());  // Output: 30
stack.print();  // Output: 10 → 20
