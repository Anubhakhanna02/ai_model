// const Memory = require("../models/Memory");

// const runForgetting = async () => {
//     const memories = await Memory.find();

//     for (let mem of memories) {
//         const age = (Date.now() - mem.createdAt) / 1000;

//         // delete low importance fast
//         if (mem.importance < 0.5 && age > 30) {
//             await Memory.findByIdAndDelete(mem._id);
//         }

//         // delete all after some time
//         if (age > 120) {
//             await Memory.findByIdAndDelete(mem._id);
//         }
//     }
// };

// module.exports = runForgetting;


const decayRate = 0.000001;

// ==============================
// 🔹 SCORE CALCULATION
// ==============================
function calculateScore(data) {
  try {
    const usage = data?.usage ?? 0.5;
    const importance = data?.importance ?? 0.5;

    const timestamp = data?.timestamp
      ? new Date(data.timestamp).getTime()
      : Date.now();

    const age = Date.now() - timestamp;

    const decay = Math.exp(-decayRate * age);

    const score = (0.7 * importance + 0.3 * usage) * decay;

    return Number(score.toFixed(4));

  } catch (err) {
    console.log("Score Error:", err);
    return 0;
  }
}

// ==============================
// 🔹 DYNAMIC THRESHOLD
// ==============================
function getDynamicThreshold(dataSize) {
  if (dataSize < 5) return 0.05;
  if (dataSize < 20) return 0.08;
  return 0.1;
}

// ==============================
// 🔹 DECISION FUNCTION
// ==============================
function shouldKeep(data, dataSize = 10) {
  try {
    const score = calculateScore(data);
    const threshold = getDynamicThreshold(dataSize);

    return score >= threshold;

  } catch (err) {
    console.log("Keep Error:", err);
    return true;
  }
}

// ==============================
// 🔹 CLASSIFICATION
// ==============================
function classifyMemory(score) {
  if (score >= 0.7) return "High";
  if (score >= 0.3) return "Medium";
  return "Low";
}

module.exports = {
  calculateScore,
  shouldKeep,
  getDynamicThreshold,
  classifyMemory
};