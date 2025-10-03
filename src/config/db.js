const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ranvijaycodess:ranvijay123@learnmongo.5xxlvec.mongodb.net/?retryWrites=true&w=majority&appName=learnMongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;