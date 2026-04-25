import React, { useState } from "react";
import "../styles/Chat.css";

const Chat = () => {

  const [input, setInput] = useState("");
  const [normalMessages, setNormalMessages] = useState([]);
  const [forgetMessages, setForgetMessages] = useState([]);

  // ✅ ENTER KEY SUPPORT
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const messageText = input;

    const userMsg = { text: messageText, sender: "user" };
    const thinkingMsg = { text: "Thinking...", sender: "ai" };

    // ✅ Add messages (NO duplication bug)
    setNormalMessages(prev => [...prev, userMsg, thinkingMsg]);
    setForgetMessages(prev => [...prev, userMsg, thinkingMsg]);

    setInput(""); // ✅ clear input instantly

    // 🔥 SAVE MEMORY (IMPORTANT FOR YOUR PROJECT)
    try {
      await fetch("http://localhost:5000/api/memory/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: messageText,
          usage: 1,
          importance: 0.8
        })
      });
    } catch (err) {
      console.log("Memory save error:", err);
    }

    try {
      // 🔹 Call BOTH APIs together (fast)
      const [normalRes, forgetRes] = await Promise.all([
        fetch("http://localhost:5000/api/chat/normal", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: messageText })
        }),
        fetch("http://localhost:5000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: messageText })
        })
      ]);

      const normalData = await normalRes.json();
      const forgetData = await forgetRes.json();

      // ✅ Replace ONLY last "Thinking..."
      setNormalMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          text: normalData.reply || "No response",
          sender: "ai"
        };
        return updated;
      });

      setForgetMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          text: forgetData.reply || "No response",
          sender: "ai"
        };
        return updated;
      });

    } catch (err) {
      console.error("Chat Error:", err);

      setNormalMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          text: "Error: " + err.message,
          sender: "ai"
        };
        return updated;
      });

      setForgetMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          text: "Error: " + err.message,
          sender: "ai"
        };
        return updated;
      });
    }
  };

  return (
    <div className="chat-page">

      {/* 🔹 NORMAL AI */}
      <div className="chat-panel">
        <h2>Normal AI 🤖</h2>
        <p className="subtitle">Remembers everything</p>

        <div className="chat-box">
          {normalMessages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              <div className="bubble">{msg.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 FORGETTING AI */}
      <div className="chat-panel">
        <h2>Forgetting AI 🧠</h2>
        <p className="subtitle">Forgets intelligently</p>

        <div className="chat-box">
          {forgetMessages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              <div className="bubble">{msg.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 INPUT */}
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}  // ✅ ENTER WORKS
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default Chat;