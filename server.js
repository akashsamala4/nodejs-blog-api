const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: "ok",
    message: "Blog API running"
  });
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "Node.js API" }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
