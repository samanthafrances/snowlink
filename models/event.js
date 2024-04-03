const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    attending: {
        type: String,
        enum: ["yes", "no", "maybe"],
        default: "maybe"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
  const eventSchema = new Schema({
    eventName: { type: String, required: true },
    date: {
      type: Number,
      default: function() {
        return new Date().getFullYear();
      },
      min: 2024
    },
    location: {
      type: String,
      enum: ['Big Bear, CA', 'Wrightwood, CA', 'Mammoth Lakes, CA', 'Lake Tahoe, CA']
    },
    comments: [commentSchema]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Event', eventSchema);