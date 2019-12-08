const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test", { useNewUrlParser: true })
  .then(() => console.log("Connected to DB..."))
  .catch(err => console.log(err));
