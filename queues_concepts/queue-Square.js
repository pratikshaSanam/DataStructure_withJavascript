function Queue(){

    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

//adds  an element to the  end  of  queue
function enqueue(element){
this.dataStore.push(element);
}

//remopve the  elemnt from the  array front of 
function dequeue(){
   return this.dataStore.shift()
}


// this  is  implementing front and back en of the  queues
function front(){
    return this.dataStore[0];
}
function back(){
    return this.dataStore[this.dataStore.length -1]
}
//to show  elements in format of  string
function toString(){
   var retStr = "";
   for(var i = 0 ; i<this.dataStore.length; i++){
    retStr += this.dataStore[i] + "\n";
   }
   return retStr;

}

//for empty queue
function empty(){
    if(this.dataStore.length == 0){
        return true;
    }
    else{
        return false;
    }
}

//here  we  can  crete teh  dancing  function

function Dancer(name,sex){
    this.name = name;
    this.sex = sex;
}

//get the  value  from dancere
function getDancer(males,femailes){
    var names = [
        "F Riya", "M Raj", "M Parker", "F Lina", "F Jennifer",
        "M Bryan", "M David", "F Lucy", "F Arura", "M Clinton"
    ];
 for(var i=0; i<names.length; i++){
    names[i] = names[i].trim();
 }

 for(var i=0; i<names.length; i++){
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];


if(sex == "F"){
    femailes.enqueue(new Dancer(name,sex));
}
else{
    males.enqueue(new Dancer(name,sex));
}
 }
}

function dance(males , females){
    console.log("the dance  [partener are ..." + "\n");
    while(! females.empty() && !males.empty()){
        person = females.dequeue();
        console.log("female dancer is :" + person.name)
        person = males.dequeue();
        console.log("male dancer is :" + person.name)


    }
    console.log();
}


//test program
var maleDancer = new Queue();
var femailDanser =  new Queue();

getDancer(maleDancer,femailDanser);
dance(maleDancer,femailDanser);
if(!femailDanser.empty()){
    console.log(femailDanser.front().name + "is wating to dance");
}
if(!maleDancer.empty()){
    console.log(maleDancer.front().name + "is wating to dance");
}