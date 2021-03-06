const express = require('express')
let router = express.Router()
const db = require('../db')



router.get('/', (req, res)=> {
   res.render('./landing')
})

router.get('/home', (req, res) => {
  res.render('./front-page')
})

router.post('/home', (req, res) => {
  if (req.body.signup == "true") {
    res.redirect('/create')
  } else {
    res.redirect('/womble/' + req.body.username)
  }
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

router.get('/search', (req, res)=>{
    res.render('search')
})

router.post('/search', (req, res)=>{
    
    let returnedVal = req.body;
    let kinkyy = Object.keys(returnedVal)
    console.log(kinkyy[0]);
    let id;

    switch(kinkyy[0]) {
        case 'balloons':
            id = 1
            break;
        case 'paws':
        id = 2
            break;
            case 'humans':
            id =  3
            break;
        case 'voyeurism':
        id = 4
            break;
            case 'bdsm':
            id = 5
            break;
        case 'cuddles':
        id = 6
            break;
            case 'ebcrj':
            id = 7
            break;
        case 'exhibitionism':
        id = 8
            break;
        default:
        id = 1
    }
    
    db.findKinkyWomble(id)
    .then(data => {
        console.log(data)
       res.render('searchResults', {data})
        
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