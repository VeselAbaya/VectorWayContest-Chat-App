const mongoose = require('../mongoose');

const RoomMessagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: 1,
  },
  messages: [
    {
      from: {
        type: String,
        trim: true,
      },
      text: {
        type: String,
        trim: true,
      },
      url: {
        type: String,
        trim: true,
      }
    }
  ]
});

const RoomMessages = mongoose.model('RoomMessages', RoomMessagesSchema);

module.exports = {RoomMessages};
