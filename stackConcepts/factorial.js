function Stack() {
    this.dataStore = [];
    this.top = 0;

    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

// Adding an element to the stack
function push(element) {
    this.dataStore[this.top++] = element;
}

// Returning the top element of the stack
function peek() {
    return this.top > 0 ? this.dataStore[this.top - 1] : undefined;
}

// Removing and returning the top element
function pop() {
    return this.top > 0 ? this.dataStore[--this.top] : undefined;
}

// Clearing the stack
function clear() {
    this.top = 0;
}

// Returning the length of the stack
function length() {
    return this.top;
}

function fact(n){
    var s = new Stack();
    while (n>1){
        s.push(n--);
    }

    var product = 1;
    while(s.length()>0){
        product *= s.pop()
    }
 return product;
}

console.log("factorial of 5 is" + fact(5));
console.log("factorial of 3 is" + fact(3));
console.log("factorial of 10 is" + fact(10));

