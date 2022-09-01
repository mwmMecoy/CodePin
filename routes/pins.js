const express = require('express')
const router = express.Router()
const snippetController = require('../controllers/pins') 
const { ensureAuth } = require('../middleware/auth')

// Get all pins
router.get('/', ensureAuth, snippetController.getCodePins)

// Get USER pins
router.get('/{userId}', snippetController.getCodePinsByUser)

// Add a new snippet
router.post('/createSnippet', snippetController.createSnippet)

// add snippet to a board
// Stretch: move snippet from one board to another
// edit a snippet?  edit text, edit language

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// Delete a snippet from a USER collection
router.delete('/deleteSnippet', snippetController.deleteSnippet)

module.exports = router