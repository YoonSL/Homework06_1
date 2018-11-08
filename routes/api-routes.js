const todoList = require('../data/todo-list.js');
const sampleArray = require('../data/sample-array.json');

module.exports = function (app) {
    app.get('/api/todoList', function (req, res) {
        res.json(todoList);
    })

    app.post('/api/todoList',function(req, res){
        todoList.push(req.body);
        res.json(todoList);
    })
    
    app.put(`/api/todoList/:index`,function(req,res){
        // todoList.splice(req.)
    })
    app.delete('/api/todoList/:index', function (req, res) {
        todoList.splice(req.params.index, 1);

        res.json({ success: true });
    })
}