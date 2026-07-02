const posts = require("../data/posts");
const getAllPosts = (req, res) => {
  res.json(posts);
};
const newPost = (req, res) => {
  res.send("Create New Blog Page");
};
const createPost = (req, res) => {
  posts.push(req.body);
  res.status(201).json({
    message: "Post created successfully",
    post: req.body,
  });
};
const getPostById = (req, res) => {
  const id = Number(req.params.id);
 const post = posts.find((p) => p.id === id);
 if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }
res.json(post);
};
const editPost = (req, res) => {
  const id = Number(req.params.id);
 const post = posts.find((p) => p.id === id);
 if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

res.send(`Edit page for post ${id}`);
};
const updatePost = (req, res) => {
  const id = Number(req.params.id);
 const post = posts.find((p) => p.id === id);
if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

post.user = req.body.user || post.user;
  post.text = req.body.text || post.text;
res.json({
    message: "Post updated successfully",
    post,
  });
};
const deletePost = (req, res) => {
    const id = Number(req.params.id);

    const index = posts.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Post not found",
        });
    }

    const deletedPost = posts.splice(index, 1);

    res.json({
        message: "Post deleted successfully",
        post: deletedPost[0],
    });
};
module.exports = {
  getAllPosts,
  newPost,
  createPost,
  getPostById,
  updatePost,
  editPost,
  deletePost,
};