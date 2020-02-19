const Todo = require('../models/todo');
// by convention Models are always capitalized

module.exports = {
	index,
	show
};
 
// this is the callback function
// index always shows everything
function index(req, res) {
	res.render('todos/index', {
	 todos: Todo.getAll()
	});
}

function show(req, res) {
	console.log(req.params, ' req.parms')
	//req.params.whateverTheParamIs, 
	// is how we access that variable
	// param defined in the router 
	// and looks like this router.get('/:id', todosCtrl.show);
	res.render('todos/show', {
	 todo: Todo.getOne(req.params.id),
	 todoNum: parseInt(req.params.id) + 1
	});
}




