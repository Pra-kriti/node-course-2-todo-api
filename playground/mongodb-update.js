// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('TodoApp').findOneAndUpdate({
  //   _id: new ObjectID('5b0163cb348c896329ef0e25')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b00de4b53f90b3bc506fd09')
  },{
    $set: {
      name: 'Pooja'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
  // db.close();
});
