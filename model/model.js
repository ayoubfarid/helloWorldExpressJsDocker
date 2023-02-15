const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    subject: {
        required: false,
        type: String
    },
    content: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('post', Post)