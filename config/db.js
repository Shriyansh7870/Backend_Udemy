const cloudUrl =
  "mongodb+srv://shriyansh7870:Reso7870@cluster0.vo8qm3r.mongodb.net/UdemyClone?retryWrites=true&w=majority";
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(cloudUrl);

    console.log("Connected to the database");
  } catch (err) {
    console.error("Error in connect DataBase", err);
  }
};

module.exports = connection;
