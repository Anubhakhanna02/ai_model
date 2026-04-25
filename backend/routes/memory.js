const express = require("express");
const router = express.Router();

const Memory = require("../models/Memory");

const {
  addData,
  getMemory,
  forgetData,
  getStats,
  compareAI,
  runExperiment,
  getExperimentDetailed,   // 🔥 NEW
  getTradeoff              // 🔥 NEW
} = require("../controllers/memoryController");

// ==============================
// 🔹 CORE ROUTES
// ==============================

// Add memory
router.post("/data", addData);

// Get all memory
router.get("/memory", getMemory);

// Run forgetting (supports slider via query param)
router.get("/forget", forgetData);

router.get("/tradeoff", getTradeoff);

// ==============================
// 🔹 ANALYTICS ROUTES
// ==============================

router.get("/stats", getStats);
router.get("/compare", compareAI);
router.get("/experiment", runExperiment);

// 🔥 NEW ADVANCED RESEARCH ROUTES
router.get("/experiment-details", getExperimentDetailed);
router.get("/tradeoff", getTradeoff);

// ==============================
// 🔥 DEMO ROUTES (FOR TESTING)
// ==============================

// ✅ Seed data
router.get("/seed", async (req, res) => {
  try {
    const sampleData = [
      { content: "Exam tomorrow", usage: 0.9, importance: 0.95 },
      { content: "I like pizza", usage: 0.2, importance: 0.1 },
      { content: "Meeting at 5pm", usage: 0.8, importance: 0.7 },
      { content: "Old memory", usage: 0.1, importance: 0.2 },
      { content: "Project deadline", usage: 0.95, importance: 0.9 },
      { content: "Random thought", usage: 0.05, importance: 0.1 },
      { content: "Workout plan", usage: 0.6, importance: 0.5 },
      { content: "Shopping list", usage: 0.3, importance: 0.2 }
    ];

    await Memory.insertMany(sampleData);

    res.json({
      message: "✅ Dummy data added successfully",
      count: sampleData.length
    });

  } catch (err) {
    console.error("Seed Error:", err);
    res.status(500).json({ error: "Failed to seed data" });
  }
});

// ✅ Reset DB
router.get("/reset", async (req, res) => {
  try {
    await Memory.deleteMany({});
    res.json({ message: "🗑️ Database cleared successfully" });
  } catch (err) {
    console.error("Reset Error:", err);
    res.status(500).json({ error: "Failed to reset database" });
  }
});

module.exports = router;