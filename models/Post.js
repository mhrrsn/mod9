const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, default: "Untitled"},
    content: {type: String},
    image: {type: Image},
    likes: {type: Number},
    comments: [{
        text: {type: String, required: true},
        author: {type: String},
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
});

module.exports = mongoose.model('post', postSchema);