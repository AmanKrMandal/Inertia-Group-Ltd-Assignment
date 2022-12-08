require('dotenv').config()
const mongoose = require("mongoose");
const DB = "mongodb+srv://aman:aman@cluster0.rjfqtw4.mongodb.net/product?retryWrites=true&w=majority"

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

  // useCreateIndex: true,
  // strictQuery: true,
  // useFindAndModify:false,
})
  .then(() => {
    console.log("connection start");
  })
  .catch((error) => {
    console.log(error.message);
  });

