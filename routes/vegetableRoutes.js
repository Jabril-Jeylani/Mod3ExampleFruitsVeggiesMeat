const express = require('express')


// Create our router
const router = express.Router()

// Bring in our controller logic
const vegetableController = require('../controllers/vegetableController')

// "index" route      //   localhost:8080/fruits/
router.get('/', vegetableController.index)

// "show" route      //   localhost:8080/vegetables/:indexOfFruit
router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router