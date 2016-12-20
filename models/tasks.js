var mongoose = require('mongoose');

// Task SCHEMA SETUP
var tasksSchema = new mongoose.Schema({
    title: String,
    isDone: Boolean
});

module.exports = mongoose.model('Tasks', tasksSchema);