const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now },
    time: String,
    comment:String
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true 
//  }
 });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;