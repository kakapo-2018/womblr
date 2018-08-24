const express = require('express')
let router = express.Router()
const db = require('../db')



router.get('/', (req, res)=> {
   res.send('wowoowososoowow')
})

router.get('/womble', (req, res) => {
    db.getWombles()
    .then(wombles => {
        res.send(wombles)
    })

})

router.get('/womble/:id', (req, res) => {
    //db.womblesAndKinks(req.params.id)
    db.womblesAndKinks(req.params.id)
    .then(womble => {
        res.render('profile', womble)
    })

})

router.get('/test', (req, res) =>{
    db.womblesAndKinks(41)
    .then(data => {
     res.send(data)
    })
})

router.get('/create', (req, res) =>{
    res.render('./signup')
})

router.post('/create', (req, res) =>{
//    console.log(req.body)
   
    let username = req.body.username
    let age = req.body.age
    let bio = req.body.bio
    let profile_pic = req.body.profile_pic
    let kinks = {};
    kinks.balloons = !(req.body.balloons == null)
    kinks.paws = !(req.body.paws == null)
    kinks.humans = !(req.body.humans == null)
    kinks.voyeurism = !(req.body.voyeurisim == null)
    kinks.bdsm = !(req.body.bdsm == null)
    kinks.cuddles = !(req.body.cuddles == null)
    kinks.ebcrj = !(req.body.ebcrj == null)
    kinks.exhibitionism = !(req.body.exhibitionism == null)
    //console.log(kinks)

    db.createWomble(username, age, bio, profile_pic, kinks)
    .then(id =>{
        res.redirect('/womble/' + id)
    }) 
    

})

module.exports = router



// pupRouter.post('/edit/:id', (req, res) => {
//     // console.log(req.body)
//     const puppyToEdit = dataFile.puppies.find((element) => {
//         return element.id == req.params.id
//     })

//     puppyToEdit.name = req.body.name
//     puppyToEdit.breed = req.body.breed
//     puppyToEdit.owner = req.body.owner

//     fs.writeFile('./data.json', JSON.stringify(dataFile,null,2), (err)=>{
//         console.log(err)
//     })

//     res.redirect('/puppies/' + req.params.id)
// })