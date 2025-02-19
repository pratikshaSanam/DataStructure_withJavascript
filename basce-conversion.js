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

//converting number to base2 and  base8

function numBase(num, base){
var s = new Stack();
do{
    s.push(num%base);
    num = Math.floor(num/=base);
}
while(num>0);
var converted = "";
while(s.length()>0){
    converted+= s.pop();
}
return converted;
}

var num = 32;
var base = 2;
var newNum = numBase(num,base);
console.log(num+ "converted to base"+ base + "is" +newNum);
num = 125;
base = 8;
var newNum = numBase(num,base);
console.log(num+ "converted to base"+ base + "is" +newNum);
