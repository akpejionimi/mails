require('dotenv').config();

const express = require ('express');
// const bodyParser = require("body-parser"); 
// const path = require("path");


const app = express();

// app.use(express.static(path.join(__dirname, "public")))
// app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req,res) => {
    res.send({bye: 'Buddy'});
})


//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`listening at port ${PORT}`));