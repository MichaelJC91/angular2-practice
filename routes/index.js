var express = require('express'),
    router = express.Router(),
    Tasks = require('../models/tasks');

//INDEX ROUTE - Show all tasks
router.get('/', function(req, res) {
    //Get all tasks from the database
    Tasks.find({}, function(err, allTasks) {
        if(err) {
            console.log(err);
        }   else {
            res.json(allTasks);
        }
    });
});

module.exports = router;