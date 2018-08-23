
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const wombleRoutes = require('./routes/wombles')

const server = express()

// Middleware

server.engine('hbs', hbs({defaultLayout: 'main', extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

server.use(express.static(__dirname + '/public'))
// server.use('/public', express.static(path.join(__dirname, 'public')))
// Routes

server.use('/', wombleRoutes)

module.exports = server