const { Schema, model, Types } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
   
  });

// Initialize our Post model
const Thoughts = model('thought', postSchema);

module.exports = Thoughts;
