function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

// Adds an element to the end of the queue
function enqueue(element) {
    this.dataStore.push(element);
}

// Removes the element with the highest priority (lowest code value)
function dequeue() {
    var priorityIndex = 0; // Should track index, not code
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < this.dataStore[priorityIndex].code) {
            priorityIndex = i;
        }
    }

    return this.dataStore.splice(priorityIndex, 1)[0]; // Return the removed patient object
}

// Implementing front and back of the queue
function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// To show elements in string format
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i].name + " (Priority: " + this.dataStore[i].code + ")\n";
    }
    return retStr;
}

// Check if the queue is empty
function empty() {
    return this.dataStore.length === 0;
}

// Priority Queue logic
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

var ed = new Queue();
ed.enqueue(new Patient("Smith", 5));
ed.enqueue(new Patient("John", 4));
ed.enqueue(new Patient("Raaj", 3));
ed.enqueue(new Patient("Rita", 1)); // Highest priority
ed.enqueue(new Patient("Siya", 2));

console.log("Patients in queue:");
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen:");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen:");
console.log(ed.toString());
