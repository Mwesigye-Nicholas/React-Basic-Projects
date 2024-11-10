const express = require("express");
const cors = require("cors");
require("./db");
const PORT = process.env.PORT || 5000;
const blogRouter = require("./route/blog-route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.get("/api", (req, res) => {
  res.send("Halo World");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
