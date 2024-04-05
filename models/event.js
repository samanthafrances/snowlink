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
    eventName: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    location: {
      type: String,
      enum: ['Bear Mountain, CA', 'Mount High, CA', 'Mammoth Mountain, CA', 'Palisades Tahoe, CA', 'Park City, UT', 'Vail, CO', 'Deer Valley Resort, UT', 'Aspen Snowmass, CO', 'Breckenridge, CO', 'Telluride, CO', 'Big Sky Resort, CO', 'Jackson Hole, WY'],
      required: true
    },
    details: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Event', eventSchema);