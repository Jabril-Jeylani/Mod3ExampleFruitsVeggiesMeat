// Bring in our fruit data
const vegetables = require('../models/vegetables')

// The callback function from the "index" route 
function index(req, res) {
    res.send(vegetables)
}

// The callback function from the "show" route
function show(req, res) {
    res.send(vegetables[req.params.indexOfVegetable])
}

module.exports = {
    index, 
    show
}