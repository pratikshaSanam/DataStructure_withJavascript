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

//test program

 var q = new Queue();
 q.enqueue("pratiksha");
 q.enqueue("sanam");
 q.enqueue("riya");
 q.enqueue("raaj");
 q.enqueue("bhagwan");


 console.log(q.toString());
 q.dequeue();
 console.log(q.toString());
 console.log("front of the queue :" + q.front());
 console.log("rear of the queue :" + q.back());
 q.dequeue();
 console.log("front of the queue :" + q.front());
 console.log("rear of the queue :" + q.back());

 