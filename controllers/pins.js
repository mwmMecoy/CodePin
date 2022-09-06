const Snippet = require('../models/Pins')
const User = require('../models/User')

module.exports = {
    getCodePins: async (req, res) => { // Get ALL  
        try {
            const allSnippets = await Snippet.find()
            res.render('dashboard.ejs', { snippets: allSnippets, userId: req.user._id, favorites: req.user.favorites })
        } catch (err) {
            console.log(err)
        }
    },
    getCodePinsByUser: async (req, res) => { // Get by USER
        try {
            const userSnippets = await Snippet.find({ userId: req.user.id })
            res.render('pins.ejs', { snippets: userSnippets, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createSnippet: async (req, res) => {
        try {
            await Snippet.create(
                {
                    snippet: encodeURIComponent(req.body.todoItem),
                    title: req.body.codeTitle,
                    description: req.body.codeDescription,
                    completed: false,
                    language: req.body.language,
                    userId: req.user.id
                })
            console.log('A new CodePin has been added!')
            res.redirect('/pins')
        } catch (err) {
            console.log(err)
        }
    },
    deleteSnippet: async (req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Snippet.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    },
    selectFavorite: async (req,res) => {
        console.log(req)
        try {
            await User.updateOne(
                {_id: req.user.id},
                { $push: { favorites : req.body.pinId}}
            ) 
        } catch (error) {
            console.log(error)
        }
    },
    deselectFavorite: async(req, res) => {
        console.log(req)
        try {
            await User.updateOne(
                {_id: req.user.id},
                { $pull: { favorites : req.body.pinId}}
            )
        } catch (error) {
            console.log(error)
        }
    }
}    