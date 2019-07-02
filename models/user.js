// requirements: require ./connection as 'mongoose'
const mongoose = require('./connection.js');

// Create a user schema
let UserSchema = new mongoose.Schema({
  name: String
});

// Assign your model to a variable
let UserCollection = mongoose.model('User', UserSchema);

// Add a function to get all users
function getAllUsers() {
  return UserCollection.find();
}

// Add a function to create a user
function createUser(newUser) {
  return UserCollection.create(newUser);
}

// Add a function to get a user by id
function getUserById(userId) {
  return UserCollection.findById(userId);
}

// Include the functions you have created in the module.exports object
module.exports = {
  createUser,
  getAllUsers,
  getUserById
}
