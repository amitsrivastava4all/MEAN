var events = require("events");
var eventEmitter = new events.EventEmitter();

function connect(){
console.log("Connect Called..");
}

function disconnect(){
console.log("Disconnect Called..");
}

function process(){
console.log("Process Called..");
}

eventEmitter.on("open",connect);
eventEmitter.on("query",process);
eventEmitter.on("close",disconnect);

eventEmitter.emit("open");
eventEmitter.emit("query");
eventEmitter.emit("close");