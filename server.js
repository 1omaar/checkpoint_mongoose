const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
// connect database
connectDB();

// create route
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server is runnig");
});
