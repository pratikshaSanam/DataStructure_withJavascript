function Dictionary() {
    this.dataStore = {}; // Use an object instead of an array
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.dataStore[key] = value; // Assign key-value pair
}

function find(key) {
    return this.dataStore[key] || "Not found"; // Return value or a default message
}

function remove(key) {
    delete this.dataStore[key]; // Correct delete syntax
}

function showAll() {
    Object.keys(this.dataStore).forEach(key => {
        console.log(key + " -> " + this.dataStore[key]); // Proper key iteration
    });
}

// Test the Dictionary
var pbook = new Dictionary();
pbook.add("mike", "123");
pbook.add("gita", "124");
pbook.add("rita", "125");
pbook.add("rina", "126");
pbook.add("kispi", "127");

console.log("Mike extension: " + pbook.find("mike"));
console.log("Gita extension: " + pbook.find("gita"));

pbook.remove("mike");
console.log("Mike extension after removal: " + pbook.find("mike"));

console.log("All entries in the phonebook:");
pbook.showAll();
