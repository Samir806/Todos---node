const Post = require("./post.js");

class PostService {
  async create(post) {
    const app = await Post.create(post);
    return app;
  }
  async getAll() {
    const app = await Post.find();
    return app;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("not id");
    }
    const app = await Post.findById(id);
    return app ;
  }
  async update(post) {
    if(!post.id){
      throw new Error('Id doesnt exist')
    }
      const update = await Post.findByIdAndUpdate(post._id, post, {new: true})
       return update
}
  async delete(id) {
      if (!id) {
        throw new Error('Id doesnt exist')
      }
      const post = await Post.findByIdAndDelete(id);
      return post
  }
}

module.exports = new PostService();
