const express = require("express");
const router = express.Router();

const Memory = require("../models/Memory");

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("⚠️ GEMINI_API_KEY is missing in your environment variables!");
}

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

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
// 🔹 GEMINI CALL
// ==============================
async function callGemini(message) {
    const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }],
        }),
    });

    const data = await response.json();

    return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        (data.error ? `Gemini error: ${data.error.message}` : "No response")
    );
}

// ==============================
// 🔥 SAVE MEMORY FUNCTION
// ==============================
async function saveMemory(message) {
    if (!message || message.trim().length < 3) return;

    const cleanMsg = message.trim();

    // 🔥 CHECK DUPLICATE
    const existing = await Memory.findOne({ content: cleanMsg });

    if (existing) {
        existing.usage += 0.1;
        existing.timestamp = new Date(); // update time
        await existing.save();
    } else {
        const importance = getImportance(cleanMsg);

        await Memory.create({
            content: cleanMsg,
            importance,
            usage: 0.5,
            timestamp: new Date()
        });
    }
}

// ==============================
// 🔹 NORMAL AI
// ==============================
router.post("/normal", async (req, res) => {
    try {
        const { message } = req.body;

        if (!API_KEY) {
            return res.json({ reply: "Config error: GEMINI_API_KEY missing" });
        }

        const reply = await callGemini(message);

        // 🔥 SAVE MEMORY
        await saveMemory(message);

        res.json({ reply });

    } catch (err) {
        console.error("Normal AI error:", err);
        res.json({ reply: "Error from Normal AI: " + err.message });
    }
});

// ==============================
// 🔹 FORGETTING AI
// ==============================
router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        if (!API_KEY) {
            return res.json({ reply: "Config error: GEMINI_API_KEY missing" });
        }

        const reply = await callGemini(message);

        // 🔥 SAVE MEMORY
        await saveMemory(message);

        res.json({ reply });

    } catch (err) {
        console.error("Forget AI error:", err);
        res.json({ reply: "Error from Forgetting AI: " + err.message });
    }
});

module.exports = router;