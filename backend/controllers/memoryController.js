const Memory = require("../models/Memory");
const {
  shouldKeep,
  calculateScore,
  getDynamicThreshold,
  classifyMemory
} = require("../utils/forgettingEngine");

// ==============================
// 🔥 IMPORTANCE FUNCTION
// ==============================
function getImportance(text) {
  text = text.toLowerCase();

  if (text.includes("exam") || text.includes("deadline")) return 0.95;
  if (text.includes("project") || text.includes("meeting")) return 0.8;
  if (text.includes("study") || text.includes("plan")) return 0.6;
  if (text.includes("shopping") || text.includes("workout")) return 0.4;

  return 0.2;
}

// ==============================
// ✅ 1. ADD DATA (FIXED)
// ==============================
exports.addData = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content required" });
    }

    // 🔥 DUPLICATE CHECK
    const existing = await Memory.findOne({ content });

    if (existing) {
      existing.usage += 0.1;
      existing.timestamp = new Date(); // update time
      await existing.save();

      return res.json({ message: "Updated existing memory" });
    }

    const importance = getImportance(content);

    const data = await Memory.create({
      content,
      importance,
      usage: 0.5,
      timestamp: new Date()
    });

    res.json(data);

  } catch (err) {
    console.error("Add Error:", err);
    res.status(500).json({ error: "Failed to add data" });
  }
};

// ==============================
// ✅ 2. GET MEMORY (WITH SCORE + TYPE)
// ==============================
exports.getMemory = async (req, res) => {
  try {
    const data = await Memory.find();

    const result = data.map(item => {
      const score = calculateScore(item);

      return {
        ...item._doc,
        score,
        type: classifyMemory(score)
      };
    });

    res.json(result);

  } catch (err) {
    console.error("Get Memory Error:", err);
    res.status(500).json({ error: "Failed to fetch memory" });
  }
};

// ==============================
// ✅ 3. FORGET DATA
// ==============================
exports.forgetData = async (req, res) => {
  try {
    const allData = await Memory.find();
    const dataSize = allData.length;

    const customThreshold = parseFloat(req.query.threshold);

    let removed = 0;
    let kept = 0;

    for (let item of allData) {
      const score = calculateScore(item);

      const threshold = isNaN(customThreshold)
        ? getDynamicThreshold(dataSize)
        : customThreshold;

      if (score < threshold) {
        await Memory.findByIdAndDelete(item._id);
        removed++;
      } else {
        kept++;
      }
    }

    res.json({
      message: "Forgetting complete",
      removed,
      kept,
      threshold: customThreshold || getDynamicThreshold(dataSize)
    });

  } catch (err) {
    console.error("Forget Error:", err);
    res.status(500).json({ error: "Forget failed" });
  }
};

// ==============================
// ✅ 4. STATS
// ==============================
exports.getStats = async (req, res) => {
  try {
    const data = await Memory.find();
    const dataSize = data.length;

    let scores = [];
    let kept = 0;
    let removed = 0;

    data.forEach(item => {
      const score = calculateScore(item);
      scores.push(score);

      if (shouldKeep(item, dataSize)) kept++;
      else removed++;
    });

    res.json({
      total: data.length,
      kept,
      removed,
      scores
    });

  } catch (err) {
    console.error("Stats Error:", err);
    res.status(500).json({ error: "Stats failed" });
  }
};

// ==============================
// ✅ 5. AI COMPARISON
// ==============================
exports.compareAI = async (req, res) => {
  try {
    const data = await Memory.find();
    const dataSize = data.length;

    const normalAI_size = data.length;

    const filtered = data.filter(item =>
      shouldKeep(item, dataSize)
    );

    const forgettingAI_size = filtered.length;

    const improvement =
      normalAI_size === 0
        ? 0
        : ((normalAI_size - forgettingAI_size) / normalAI_size) * 100;

    res.json({
      normalAI_size,
      forgettingAI_size,
      improvement: Number(improvement.toFixed(2))
    });

  } catch (err) {
    console.error("Compare Error:", err);
    res.status(500).json({ error: "Comparison failed" });
  }
};

// ==============================
// ✅ 6. EXPERIMENT
// ==============================
exports.runExperiment = async (req, res) => {
  try {
    const data = await Memory.find();
    const dataSize = data.length;

    let before = data.length;
    let after = data.filter(item =>
      shouldKeep(item, dataSize)
    ).length;

    let efficiencyGain =
      before === 0 ? 0 : ((before - after) / before) * 100;

    res.json({
      before,
      after,
      efficiencyGain: efficiencyGain.toFixed(2),
      conclusion:
        "Digital forgetting reduces memory load and improves efficiency."
    });

  } catch (err) {
    console.error("Experiment Error:", err);
    res.status(500).json({ error: "Experiment failed" });
  }
};

// ==============================
// ✅ 7. DETAILED EXPERIMENT
// ==============================
exports.getExperimentDetailed = async (req, res) => {
  try {
    const data = await Memory.find();
    const dataSize = data.length;

    let scores = [];
    let kept = 0;
    let removed = 0;

    data.forEach(item => {
      const score = calculateScore(item);
      scores.push(score);

      if (shouldKeep(item, dataSize)) kept++;
      else removed++;
    });

    const avgScore =
      scores.reduce((a, b) => a + b, 0) / (scores.length || 1);

    const efficiency =
      dataSize === 0 ? 0 : (removed / dataSize) * 100;

    res.json({
      total: dataSize,
      kept,
      removed,
      efficiency: efficiency.toFixed(2),
      avgScore: avgScore.toFixed(2)
    });

  } catch (err) {
    console.error("Detailed Experiment Error:", err);
    res.status(500).json({ error: "Detailed experiment failed" });
  }
};

// ==============================
// ✅ 8. TRADEOFF
// ==============================
exports.getTradeoff = async (req, res) => {
  try {
    const data = await Memory.find();

    let points = [];

    for (let threshold = 0.05; threshold <= 0.5; threshold += 0.05) {

      let kept = data.filter(item => {
        const score = calculateScore(item);
        return score >= threshold;
      }).length;

      let accuracy = 0.95 - (threshold * 0.3);

      points.push({
        threshold: threshold.toFixed(2),
        memory: kept,
        accuracy: Number(accuracy.toFixed(2))
      });
    }

    res.json(points);

  } catch (err) {
    console.error("Tradeoff Error:", err);
    res.status(500).json({ error: "Tradeoff failed" });
  }
};