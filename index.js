require('dotenv').config();

const express = require ('express');
require('./services/passport')
const authRoutes =  require('./routes/authRoutes')
const app = express();

 
//Routes
authRoutes(app); 



app.get('/', (req,res) => {
    res.send({bye: 'Buddy'});
})


//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`listening at port ${PORT}`));