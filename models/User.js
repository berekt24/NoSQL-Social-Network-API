const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
   
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
