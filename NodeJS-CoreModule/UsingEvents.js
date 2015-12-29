var events = require("events");
var eventEmitterObject = new events.EventEmitter();

function callback(value){
    console.log("Function CallBack "+value);
}

// Define
eventEmitterObject.addListener("ring",callback);


// Define
/*eventEmitterObject.on("ring",function(){
    console.log("Bell Rings");
});*/
eventEmitterObject.emit("ring","Amit");  // Call

















/*

function mycallback(value){
console.log("My Event Called... ",value);
}

function anothercallback(){
console.log("Another Call Back Called... ");
}


// this code will define the event
// the default limit to attach a callback is 10
ee.setMaxListeners(20);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);
ee.on("myevent",mycallback);

//ee.on("myevent",anothercallback);

ee.emit("myevent",'amit');  // this code trigger the event
ee.removeListener("myevent",mycallback);
ee.emit("myevent",'mike');
ee.emit("myevent",'tim');
ee.emit("myevent",'tom');*/
