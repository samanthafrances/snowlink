const Event = require('/models/event');
const User = require('/models/user');

const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  }, {
    timestamps: true
  });

module.exports = {
};