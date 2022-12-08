// const mongoose = require('mongoose')
const express = require("express");
const cors = require("cors");

require("./db/config");
const Item = require("./db/item"); 

const app = express();

//share the data on mongodb
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//error fix by using cors
app.use(cors());

app.get("/items", async (req, resp) => {
    let item = await Item.find();
      resp.json(item);
  });


app.get("/", (req, resp) => {
    resp.json("server start")
  })
  
  const port = process.env.PORT || 3000
  
  app.listen(port,() => {
    console.log(`app running at ${port}`);
  });