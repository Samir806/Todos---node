const mongoose = require('mongoose')
const {Schema, model} =require('mongoose')

const Post = mongoose.Schema({
    author:{type:String, required:true},
    title:{type:String, required:true},
    content:{type:String, required:true},
    picture:{type:String}
})

module.exports= model("data", Post)