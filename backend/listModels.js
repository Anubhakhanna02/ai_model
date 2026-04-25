// listModels.js
require("dotenv").config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("❌ GEMINI_API_KEY is missing in your .env file!");
    process.exit(1);
}

const GEMINI_LIST_URL = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

async function listModels() {
    try {
        const response = await fetch(GEMINI_LIST_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (data.models && data.models.length > 0) {
            console.log("✅ Available Models for your API key:\n");
            data.models.forEach((model, index) => {
                console.log(`${index + 1}. ${model.name}`);
            });
        } else {
            console.log("⚠️ No models found. Check your API key and permissions.");
            console.log(data);
        }
    } catch (err) {
        console.error("Error fetching models:", err);
    }
}

listModels();