const mongoose = require('mongoose');
require('dotenv').config();
const monoURL = process.env.MONGODB_URL

mongoose.connect(monoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to server');
})

db.on('error', ()=>{
    console.log('error in connection');
})

db.on('disconnected' , ()=>{
    console.log('disconnected from server')
})