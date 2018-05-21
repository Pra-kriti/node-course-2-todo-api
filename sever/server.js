var mongoose = require('monogoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc)=>{
  console.log('Saved data: ', doc);
},(e)=>{
  console.log('Unable to save todo');
});