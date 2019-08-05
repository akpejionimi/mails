require('dotenv').config();
const mongoose = require('mongoose') 

const express = require ('express');
require('./models/User')
require('./services/passport')
const keys = require('./config/keys')
const authRoutes =  require('./routes/authRoutes')
mongoose.connect(keys.mongoUri)
const app = express();
 
//Routes
authRoutes(app); 

app.get('/', (req,res) => {
    res.send({bye: 'Buddy'});
})


//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`listening at port ${PORT}`));