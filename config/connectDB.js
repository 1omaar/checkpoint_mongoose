const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    let connex = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log(`error is ${error}`);
  }
};
module.exports = connectDB;
