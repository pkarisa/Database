
// Imports
const express = require('express');
const mongoose = require('mongoose');

let indexRouter = require('./routes/index');

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'darkroom';
mongoose.connect(mongodb_url + dbName,)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})