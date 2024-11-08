const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", (req, res) => {
  res.send("Halo World");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
