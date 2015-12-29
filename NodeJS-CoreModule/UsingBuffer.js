/*
 1. JavaScript is good at handling strings, but because it was initially designed to manipulate
 HTML documents, it is not very good at handling binary data. JavaScript doesn’t have a byte
 type — it just has numbers — or structured types, or even byte arrays: It just has strings.
 Because Node is based on JavaScript, Node can handle text protocols like HTTP, but you can
 also use it to talk to databases, manipulate images, and handle file uploads

 2. The Buffer class is a global, making it very rare that one would need to ever require('buffer').

 */

var buffer = new Buffer("Hello World");
console.log("Buffer "+buffer);
var buffer2 = new Buffer("Hello World","utf8");
var buffer3 = new Buffer(1024);
buffer3.write("Hello");
console.log("Buffer Length ",buffer.length);
console.log("Buffer3 Length ",buffer3.length);
var buffer4 = new Buffer(10);
buffer4.fill(1);
console.log(buffer4);

for(var i = 0; i<buffer.length; i++){
 console.log(buffer[i]);
}
if(buffer.equals(buffer2)){
 console.log("Equals");
}

// Converting Buffer into JSON
var buffer5 = new Buffer("Hello this is the Sample Data");

var json = buffer5.toJSON();
console.log("Json is ",json);
/*
 buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])#
 targetBuffer Buffer object - Buffer to copy into
 targetStart Number, Optional, Default: 0
 sourceStart Number, Optional, Default: 0
 sourceEnd Number, Optional, Default: buffer.length
 Copies data from a region of this buffer to a region in the target buffer even if the target memory region overlaps with the source. If undefined the targetStart and sourceStart parameters default to 0 while sourceEnd defaults to buffer.length.
 */
buffer.copy(buffer5,0,5,buffer.length);
console.log(buffer[1]);
console.log("After Copy ",buffer5.toString());
/*
slice
 start Number, Optional, Default: 0
 end Number, Optional, Default: buffer.length
 */
var buf2 = buffer.slice(0, 3);
console.log("Slice "+buf2);

