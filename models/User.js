const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator: function (v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
          },
          message: props => `${props.value} isn't an email!`
        }
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  ]
},
{
  toJSON: {
      virtuals: true
  }
}
);
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
