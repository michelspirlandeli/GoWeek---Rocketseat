const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(
    "mongodb://goweek:goweek123@ds253713.mlab.com:53713/goweekmichel",{
        useNewUrlParser: true
    }
);

app.get('/', (req, res) =>{
   return res.send('Heloo world, Michel') ;
});

app.listen(3000, () =>{
   console.log('Server started on port 3000') ;
});