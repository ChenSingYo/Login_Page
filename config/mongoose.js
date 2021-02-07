const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/Log-In', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => { console.log('connection error') })
db.once('open', () => { console.log('mongoDB is connected.') })

module.exports = db
