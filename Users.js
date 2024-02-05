const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const UserModel = mongoose.model("your_table_name", UserSchema);
module.exports = UserModel;
