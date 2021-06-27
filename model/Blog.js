const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    'heading': {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    publisedDate: {
        type: Date,
        default: new Date()
    },
    uuid: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'default.png'
    },
    views: {
        type: Number,
        default:0
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', BlogSchema)