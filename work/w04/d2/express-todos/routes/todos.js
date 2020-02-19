var express = require('express');
var router = express.Router();

const todosCtrl = require('../controllers/todos');



/* GET users listing. */
// index route
router.get('/', todosCtrl.index);
// show route
// param were defining called id
router.get('/:id', todosCtrl.show);

module.exports = router;
