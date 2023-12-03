const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  appName: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  iframeUrl: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Apps = mongoose.model("apps", appSchema);

module.exports = Apps;
