const { Schema, model, Types } = require('mongoose');

// Schema to create Thought model
const postSchema = new Schema(
  {
   
  });

// Initialize our Thought model
const Thoughts = model('thought', postSchema);

module.exports = Thoughts;
