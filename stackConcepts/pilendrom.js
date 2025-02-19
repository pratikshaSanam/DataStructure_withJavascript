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

// Function to check if a word is a palindrome
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }

    return word === rword;
}

// Testing the function
var word = "madam";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}

var word1 = "hello";
if (isPalindrome(word1)) {
    console.log(word1 + " is a palindrome");
} else {
    console.log(word1 + " is not a palindrome");
}
