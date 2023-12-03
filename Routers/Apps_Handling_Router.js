const express = require("express");
const Apps = require("../Model/Apps_Model.js");

const router = express.Router();

// Get all apps
router.get("/", async (req, res) => {
  try {
    const apps = await Apps.find({ userId: req.userId });
    return res.status(200).json(apps);
  } catch (error) {
    console.log("Error getting apps: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// get app by id
// Get all apps
router.get("/select/:id", async (req, res) => {
  try {
    const id = req.params.id
    const app = await Apps.findById(id);
    return res.status(200).json(app);
  } catch (error) {
    console.log("Error getting app: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Post app
router.post("/add", async (req, res) => {
  try {
    const userId = req.userId;
    const { appName, url, description, imageUrl, iframeUrl } = req.body;
    if (!appName || !url || !description || !imageUrl)
      return res.status(400).json({ message: "Provide all details" });

    const existApp = await Apps.findOne({ appName });
    if (existApp) return res.status(400).json({ message: "App already exist" });
    
    const newApp = await Apps.create({
      appName,
      url,
      description,
      imageUrl,
      iframeUrl,
      userId,
    });

    if (!newApp) return res.status(500).json({ message: "Failed to add app" });

    return res.status(200).json({ message: "app added successfully" });
  } catch (error) {
    console.log("Error posting app: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Delete App
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleteApp = await Apps.findByIdAndDelete(req.params.id);
    if (!deleteApp)
      return res
        .status(404)
        .json({ message: "App not found or already deleted" });
    return res.status(200).json({ message: "App deleted successfully" });
  } catch (error) {
    console.log("Error deleting App: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
