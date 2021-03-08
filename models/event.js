const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: String,
    completed: Boolean,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;