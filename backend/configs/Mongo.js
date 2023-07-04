const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    if (con) {
      console.log("Connected to MongoDB");
    } else {
      console.log("DB failed");
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
