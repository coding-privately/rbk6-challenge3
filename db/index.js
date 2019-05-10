const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected! .......................");
});

let userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String

});

let Users = mongoose.model('Users', userSchema);


module.exports.Users = Users;