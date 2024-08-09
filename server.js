const express = require("express");
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');




app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const {jwtAuthMiddleware} = require('./jwt');

const userRoute = require('./routes/userRoutes');

const candidateRoute = require('./routes/candidateRoutes');
app.use('/user', userRoute);
app.use('/candidate' , candidateRoute);

app.listen(PORT , ()=>{
    console.log('Listerning ON PORT 3000');
});