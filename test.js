const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fitbookAdmin:kunal@cluster0.7gkkra3.mongodb.net/?appName=Cluster0"
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
