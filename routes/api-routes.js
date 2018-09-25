const todoList = require('../data/todo-list.js');
const sampleArray = require('../data/sample-array.json');

module.exports = function (app) {
    app.get('/api/index', function (req, res) {
        res.json(todoList);
    })

    app.post('/api/index',function(req, res){
        todoList.push(req.body);
        res.json(todoList);
    })
    
    app.delete('/api/index/:index', function (req, res) {
        todoList.splice(req.params.index, 1);

        res.json({ success: true });
    })
}