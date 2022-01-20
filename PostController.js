const PostService = require('./postService')

class PostController {
  async create(req, res) {
    try {
      const app = await PostService.create(req.body);
      res.json(app);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
        const post = await PostService.getAll()
        res.json(post)
    }
    catch (e) {
        res.status(500).json(e);
      }
  }
  async getOne(req, res) {
      try{
        const post = await PostService.getOne(req.params.id)
        return res.json(post)
    } catch (e) {
      res.status(500).json(e);
    } 
  }
  async update(req, res) {
    try {
        const update = await PostService.update(req.body)
       return res.json(update)
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
        const post = await PostService.delete(req.params.id)
        return res.json(post)
    }catch (e) {
    }res.status(500).json(e);
    }
  }

const controller = new PostController();

module.exports = controller;
