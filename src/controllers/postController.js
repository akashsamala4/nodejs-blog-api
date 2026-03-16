exports.getPosts = (req, res) => {
  res.json([
    { id: 1, title: "First Blog", content: "Blog content" }
  ]);
};

exports.createPost = (req, res) => {

  const { title, content } = req.body;

  res.status(201).json({
    message: "Post created",
    title,
    content
  });

};
