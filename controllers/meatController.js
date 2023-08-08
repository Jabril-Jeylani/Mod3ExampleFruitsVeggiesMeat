// Bring in our meats data
const meats = require('../models/meats')

// The callback function from the "index" route 
function index(req, res) {
    res.send(meats)
}

// The callback function from the "show" route
function show(req, res) {
    res.send(meats[req.params.indexOfMeat])
}

module.exports = {
    index, 
    show
}