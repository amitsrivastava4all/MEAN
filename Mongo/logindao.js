// Step - 1 require the mongoose module
var mongoose = require("mongoose");
// Step -2 Connect to the DB
var db = mongoose.connect("mongodb://localhost:27017/amitdb");
//db.on('error', console.error.bind(console, 'connection error:'));
// Step - 3 Creating Schema
var userSchema= new mongoose.Schema({"name":String,
    "id":{"type":String, "unique":true},"address":String
});

// Step - 4 Define name of the collection and specify the collection schema
var User = mongoose.model("usercollection",userSchema);

// Step - 4 Saving the Record
var userObject = new User({"id":1004,"name":"Shyam","address":"Delhi"});
userObject.save(function(error,doc){
   if(error){
       console.log("Error in Record Add...");
   }
    else{
       console.log("Record Added ",doc);
   }


});

// Find a Record
User.find({"id":1002},function(error,docs){
   if(error){
       console.log("Error in Searching....");
   }
    else{
       console.log(docs);
       console.log(typeof docs);
   }



});


/*
Save Method Internals
 It checks to see if the object we’re inserting is already present in our collection, by checking the _id value we’re inserting. _id field(which is a primary key in MongoDB document)
 – If there is no matching _id field in a document, it’ll call insert method and insert the data. And if the data being entered has no _id value, insert() method will create _id value for us, and insert the data into the collection.
 – If _id matches to any document in our collection, it’ll use update() instead to update the previously present data with the new data entered by the user.
 */


/*
List of Types Supported by Mongoose
 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 Objectid
 Array
 */