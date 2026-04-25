// import React from "react";
// import "../styles/Chat.css";

// const ChatBox = ({ messages }) => {
//     return (
//         <div className="chat-box">
//             {messages.map((msg, index) => (
//                 <div key={index} className={`message ${msg.sender}`}>

//                     <div className="bubble">
//                         {msg.text}
//                     </div>

//                 </div>
//             ))}
//         </div>
//     );
// };

//  export default ChatBox;









import React, { useState } from "react";
import API from "../api";
import "../styles/Chat.css";

const ChatBox = ({ messages = [], refresh }) => {
  const [input, setInput] = useState("");

  // 🔥 SEND MESSAGE
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      // 1️⃣ Send to AI (optional)
      await API.post("/chat", { message: input });

      // 2️⃣ 🔥 SAVE TO MEMORY (IMPORTANT)
      await API.post("/memory/data", {
        content: input,
        importance: Math.random(), // dynamic
        usage: Math.random()
      });

      // 3️⃣ Clear input
      setInput("");

      // 4️⃣ 🔥 Refresh dashboard
      if (refresh) refresh();

    } catch (err) {
      console.error("Send Error:", err);
    }
  };

  return (
    <div className="chat-container">

      {/* 🧠 CHAT MESSAGES */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      {/* 🔥 INPUT AREA */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>

    </div>
  );
};

export default ChatBox;
