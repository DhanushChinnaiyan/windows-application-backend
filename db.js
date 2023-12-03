const mongoose  = require("mongoose")

const dbConnection = async () => {
    try {
     await mongoose.connect(process.env.MONGODB_URL);
      console.log("DB connected successfully");
    } catch (error) {
      console.error(`DB ERROR: ${error}`);
    }
  }

module.exports = dbConnection