function Stack(){
    this.dataStore =[];
    this.top = 0;


    this.push = push;
    this.pop = pop ;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

//adding a  elemenat in the  stack
function push(element){
    this.dataStore[this.top++] == element;

}

function peek(){
    return this.dataStore[this.top-1];

}

//removing element
function pop(){
    return this.dataStore[--this.top];

}

function clear(){
    this.top = 0;
}

// return  lenth of  the  stack
function length(){
    return this.top;
}

var s = new Stack();
s.push("david");
s.push("riya");
s.push("joky");
s.push("swami");
s.push("shiv");

    console.log("length" +s.length());
    console.log("top element:" + s.peek());
    var pooped = s.pop();
    console.log("the poppes  element is"+pooped) 
    console.log(s.peek());
    s.push("catheliya");
    s.clear();
    console.log("length"+s.length());
    s.push("cyclone");
    console.log(s.peek());
