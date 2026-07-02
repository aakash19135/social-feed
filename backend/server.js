const postRoutes = require("./routes/postRoutes");
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Social-Buzz Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});