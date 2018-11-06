const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author : String,
    content: Strin,
    likes  : {
        type   : Number,
        default: 0,
    },
    createdAt:{
       type   : Date,
       default: Date. now,
    },
});

module.exports = 