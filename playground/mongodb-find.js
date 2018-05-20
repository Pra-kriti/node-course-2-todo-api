// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('TodoApp').find({
  //   _id: new ObjectID('5b0163cb348c896329ef0e25')
  // }).toArray().then((docs)=>{
  //   console.log('TodoApp');
  //   console.log(JSON.stringify(docs, undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('TodoApp').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({
    name: 'Prakriti'
  }).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch data');
  });
  // db.close();
});
