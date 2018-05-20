// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// ES6 destructuring
// var user = {name: 'Andrew',age:25};
// var {name} = user;
// console.log(name);

// frst arg - connection url
// second arg - callback function fired after connection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('TodoApp').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

 //  db.collection('Users').insertOne({
 //   name: 'Prakriti',
 //   age: 22,
 //   location: 'Suryabinayak, Bhaktapur'
 // },(err, result)=>{
 //   if(err){
 //     return console.log('Unable to insert user', err);
 //   }
 //
 //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
 // });
 //
  db.close();
});
