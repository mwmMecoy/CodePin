const mongoose = require('mongoose')

const SnippetSchema = new mongoose.Schema({
  snippet: {  // large text box
    type: String,
    required: true,
  },
  title: {  // free text
    type: String,
    required: true,
  },
  description: { // free text
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  },
  language: {  // pre-mapped options in select menu
    type: String,
    required: false
  },
  board: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Snippet', SnippetSchema)
