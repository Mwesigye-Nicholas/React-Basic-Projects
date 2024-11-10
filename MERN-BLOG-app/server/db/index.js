const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nebro:nic123@clustermern-app.uiprp.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((error) => console.log(error));
