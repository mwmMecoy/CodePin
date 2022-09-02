const Snippet = require('../models/Pins')

module.exports = {
    getCodePins: async (req,res)=>{ // Get ALL  
        try{
            const allSnippets = await Snippet.find()
            res.render('dashboard.ejs', {snippets: allSnippets})
        }catch(err){
            console.log(err)
        }
    },
    getCodePinsByUser: async (req,res)=>{ // Get by USER
        console.log(req.user)
        try {
            const userSnippets = await Snippet.find({userId:req.user.id})
            res.render('pins.ejs', {snippets: userSnippets, user: req.user})
        } catch (err) {
            console.log(err)
        }
    },
    createSnippet: async (req, res)=>{
        try{
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
        }catch(err){
            console.log(err)
        }
    },
    deleteSnippet: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Snippet.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    