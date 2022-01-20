const express = require("express");
const mongoose = require("mongoose");
const router = require('./router.js')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const url = "mongodb+srv://samir:2535560a@cluster0.xllvh.mongodb.net/cloud-disk?retryWrites=true&w=majority";
app.use('/api', router)

async function start() {
  try {
    await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
  } catch (e) {
    console.log(e);
  }
}

start();
