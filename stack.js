const stack = {
    limit: 10,
    arr: [],
    top: 0,
    push(item) {
        if(this.top===this.limit) {
            return "overflow";
        } else {
            this.arr[this.top]=item;
            this.top += 1;
            // console.log(`top: ${this.top}, arr: ${this.arr}`)
        }
    },
    pop() {
        if(this.top===0) {
            return "underflow";
        } else {
            // console.log(`top in pop: ${this.top}`);
            this.top -= 1;
            const item = this.arr[this.top];
            return item;
        }
    }
};

stack.push(5);
stack.push(3);
stack.push(2);
console.log(`1st pop: ${stack.pop()}`);
stack.push(8);
console.log(`2nd pop: ${stack.pop()}`);
console.log(`3rd pop: ${stack.pop()}`);
console.log(`4th pop: ${stack.pop()}`);
console.log(`5th pop: ${stack.pop()}`);
