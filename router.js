const express = require('express')
const Post = require('./post.js')
const PostController = require('./PostController.js')
const route = new express()


route.post('/posts', PostController.create)
route.get('/posts', PostController.getAll)
route.get('/posts/:id', PostController.getOne)
route.put('/posts', PostController.update)
route.delete('/posts/:id', PostController.delete)

module.exports = route
