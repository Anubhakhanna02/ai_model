

// // import React from "react";
// // import "../styles/Home.css";


// // const Home = () => {
// //     return (
// //         <div className="home-container">

// //             {/* ================= HERO ================= */}
// //             <div className="hero-section">

// //                 <div className="hero-text">

// //                     <span className="tag">🧠 AI Assistant</span>

// //                     <h1>
// //                         Rethink Intelligence with <br />
// //                         <span className="gradient-text">AI That Forgets</span>
// //                     </h1>

// //                     <p>
// //                         Not all intelligence comes from remembering everything.
// //                         Discover a new era of AI that adapts by forgetting and evolves like humans.
// //                     </p>

// //                     <div className="buttons">
// //                         <button className="primary-btn">Get Started</button>
// //                         <button className="secondary-btn">See Demo</button>
// //                     </div>

// //                 </div>

// //                 <div className="hero-main-image">
// //                     <img
// //                         src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
// //                         alt="AI main"
// //                     />
// //                 </div>

// //                 {/* Floating icons */}
// //                 <img
// //                     src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
// //                     className="floating img-left"
// //                     alt="bot1"
// //                 />

// //                 <img
// //                     src="https://cdn-icons-png.flaticon.com/512/4712/4712051.png"
// //                     className="floating img-top"
// //                     alt="bot2"
// //                 />

// //                 <img
// //                     src="https://cdn-icons-png.flaticon.com/512/4712/4712074.png"
// //                     className="floating img-bottom"
// //                     alt="bot3"
// //                 />
// //             </div>

// //             {/* ================= TRUST ================= */}
// //             <section className="trusted">
// //                 <p>TRUSTED BY FUTURE THINKERS</p>
// //                 <div className="logos">
// //                     <span>Google</span>
// //                     <span>Amazon</span>
// //                     <span>Meta</span>
// //                     <span>OpenAI</span>
// //                 </div>
// //             </section>

// //             {/* ================= ABOUT ================= */}
// //             <section className="about-section">
// //                 <h2>Why Forgetting Matters 🧠</h2>

// //                 <p>
// //                     Traditional AI systems store everything forever —
// //                     causing overload, bias, and inefficiency.
// //                 </p>

// //                 <p>
// //                     Humans forget constantly, and that’s what makes them adaptive.
// //                 </p>

// //                 <p>
// //                     ForgetAI introduces intelligent forgetting using decay models,
// //                     improving performance, privacy, and decision-making.
// //                 </p>

// //                 <div className="about-images">
// //                     <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
// //                     <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" />
// //                 </div>
// //             </section>

// //             {/* ================= HOW IT WORKS ================= */}
// //             <section className="how-section">
// //                 <h2>🧠 How ForgetAI Works</h2>

// //                 <div className="cards">

// //                     <div className="card">
// //                         <h3>1️⃣ Memory Encoding</h3>
// //                         <p>
// //                             Stores data with importance and usage — just like human memory prioritization.
// //                         </p>
// //                     </div>

// //                     <div className="card">
// //                         <h3>2️⃣ Scoring Model</h3>
// //                         <p>
// //                             Applies exponential decay to calculate memory strength over time.
// //                         </p>
// //                     </div>

// //                     <div className="card">
// //                         <h3>3️⃣ Intelligent Forgetting</h3>
// //                         <p>
// //                             Removes low-value memories using dynamic thresholds.
// //                         </p>
// //                     </div>

// //                     <div className="card">
// //                         <h3>4️⃣ Optimization</h3>
// //                         <p>
// //                             Reduces memory load while maintaining accuracy and efficiency.
// //                         </p>
// //                     </div>

// //                 </div>
// //             </section>

// //             {/* ================= LIVE DEMO ================= */}
// //             <section className="live-demo">

// //                 <h2>🚀 Live Memory Optimization Demo</h2>
// //                 <p>See how ForgetAI improves efficiency by forgetting intelligently</p>

// //                 <div className="demo-box">

// //                     <div className="demo-card normal">
// //                         <h3>🤖 Normal AI</h3>
// //                         <p className="big-number">100</p>
// //                         <span>Total Memories</span>
// //                     </div>

// //                     <div className="demo-card forget">
// //                         <h3>🧠 ForgetAI</h3>
// //                         <p className="big-number">62</p>
// //                         <span>After Optimization</span>
// //                     </div>

// //                     <div className="demo-card efficiency">
// //                         <h3>⚡ Efficiency</h3>
// //                         <p className="big-number">+38%</p>
// //                         <span>Memory Reduced</span>
// //                     </div>

// //                 </div>

// //             </section>


// //             {/* ============================== */}
// // {/* ❓ FAQ SECTION */}
// // {/* ============================== */}

// // <section className="faq-section">

// //   <h2>❓ Frequently Asked Questions</h2>

// //   <div className="faq-container">

// //     <div className="faq-item">
// //       <h3>What is ForgetAI?</h3>
// //       <p>
// //         ForgetAI is an AI system that mimics human memory by forgetting less important information over time using intelligent decay models.
// //       </p>
// //     </div>

// //     <div className="faq-item">
// //       <h3>Why does AI need to forget?</h3>
// //       <p>
// //         Traditional AI stores everything, leading to memory overload and inefficiency. ForgetAI removes low-value data to improve performance and scalability.
// //       </p>
// //     </div>

// //     <div className="faq-item">
// //       <h3>How does ForgetAI decide what to forget?</h3>
// //       <p>
// //         Each memory is scored based on importance, usage, and time decay. If the score drops below a threshold, it is automatically removed.
// //       </p>
// //     </div>

// //     <div className="faq-item">
// //       <h3>Does forgetting reduce accuracy?</h3>
// //       <p>
// //         Slightly, but experiments show that efficiency improves significantly while maintaining near-optimal accuracy.
// //       </p>
// //     </div>

// //     <div className="faq-item">
// //       <h3>Is this inspired by human memory?</h3>
// //       <p>
// //         Yes. Humans naturally forget irrelevant information. ForgetAI uses a similar concept through exponential decay functions.
// //       </p>
// //     </div>

// //   </div>

// // </section>

// //             {/* ================= CHAT CTA ================= */}
// //             <section className="chat-section">
// //                 <h2>Talk to ForgetAI 🤖</h2>
// //                 <p>Experience AI that evolves by forgetting</p>
// //                 <button
// //                     className="primary-btn"
// //                     onClick={() => window.location.href = "/chat"}
// //                 >
// //                     Start Chat
// //                 </button>
// //             </section>

// //             {/* ================= GRAPH PREVIEW ================= */}
// //             <section className="dashboard-preview">
// //                 <h2>AI Memory vs Time 📊</h2>
// //                 <p>Watch how irrelevant data fades over time</p>

// //                 <div className="graph-box">
// //                     <div className="bar" style={{ height: "80%" }}></div>
// //                     <div className="bar" style={{ height: "60%" }}></div>
// //                     <div className="bar" style={{ height: "40%" }}></div>
// //                     <div className="bar" style={{ height: "25%" }}></div>
// //                     <div className="bar" style={{ height: "10%" }}></div>
// //                 </div>
// //             </section>

// //             {/* ================= FOOTER ================= */}
// //             <footer className="footer">

// //                 <div className="footer-container">

// //                     <div className="footer-brand">
// //                         <h2>ForgetAI</h2>
// //                         <p>Redefining Intelligence Through Forgetting</p>
// //                     </div>

// //                     <div className="footer-links">

// //                         <div>
// //                             <strong>Product</strong>
// //                             <span>Home</span>
// //                             <span>Chat</span>
// //                             <span>Dashboard</span>
// //                         </div>

// //                         <div>
// //                             <strong>Company</strong>
// //                             <span>About</span>
// //                             <span>Careers</span>
// //                             <span>Contact</span>
// //                         </div>

// //                         <div>
// //                             <strong>Resources</strong>
// //                             <span>Docs</span>
// //                             <span>Privacy</span>
// //                             <span>Terms</span>
// //                         </div>

// //                     </div>

// //                 </div>

// //                 <div className="footer-bottom">
// //                     © 2026 ForgetAI. All rights reserved.
// //                 </div>

// //             </footer>

// //         </div>
// //     );
// // };

// // export default Home;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Home.css";

const Home = () => {

    const [openFAQ, setOpenFAQ] = useState(false);
    const navigate = useNavigate(); 

    // ✅ ADDED FUNCTIONS
    const handleGetStarted = () => {
        navigate("/chat");
    };

    const [demoData, setDemoData] = useState({
  normal: 0,
  forget: 0,
  efficiency: 0
});
    const handleSeeDemo = async () => {
  // 🔹 Scroll to demo section
  const demoSection = document.querySelector(".live-demo");
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: "smooth" });
  }

  try {
    // 🔹 STEP 1: Add demo data
    await fetch("http://localhost:5000/api/memory/seed");

    // 🔹 STEP 2: Get comparison result
    const res = await fetch("http://localhost:5000/api/memory/compare");
    const data = await res.json();

    // 🔹 STEP 3: Update UI
    setDemoData({
      normal: data.normalAI_size,
      forget: data.forgettingAI_size,
      efficiency: data.improvement.toFixed(2)
    });

  } catch (err) {
    console.log("Demo Error:", err);
  }
};

    return (
        <div className="home-container">

            {/* ================= HERO ================= */}
            <div className="hero-section">

                <div className="hero-text">

                    <span className="tag">🧠 AI Assistant</span>

                    <h1>
                        Rethink Intelligence with <br />
                        <span className="gradient-text">AI That Forgets</span>
                    </h1>

                    <p>
                        Not all intelligence comes from remembering everything.
                        Discover a new era of AI that adapts by forgetting and evolves like humans.
                    </p>

                    <div className="buttons">
                        {/* ✅ UPDATED BUTTONS */}
                        <button className="primary-btn" onClick={handleGetStarted}>
                            Get Started
                        </button>

                        <button className="secondary-btn" onClick={handleSeeDemo}>
  See Demo
</button>
                    </div>

                </div>

                <div className="hero-main-image">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                        alt="AI main"
                    />
                </div>

                {/* Floating icons */}
                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" className="floating img-left" />
                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712051.png" className="floating img-top" />
                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712074.png" className="floating img-bottom" />

            </div>

            {/* ================= TRUST ================= */}
            <section className="trusted">
                <p>TRUSTED BY FUTURE THINKERS</p>
                <div className="logos">
                    <span>Google</span>
                    <span>Amazon</span>
                    <span>Meta</span>
                    <span>OpenAI</span>
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="about-section">
                <h2>Why Forgetting Matters 🧠</h2>

                <p>
                    Traditional AI systems store everything forever —
                    causing overload, bias, and inefficiency.
                </p>

                <p>
                    Humans forget constantly, and that’s what makes them adaptive.
                </p>

                <p>
                    ForgetAI introduces intelligent forgetting using decay models,
                    improving performance, privacy, and decision-making.
                </p>

                <div className="about-images">
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" />
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="how-section">
                <h2>🧠 How ForgetAI Works</h2>

                <div className="cards">

                    <div className="card">
                        <h3>1️⃣ Memory Encoding</h3>
                        <p>Stores data with importance and usage.</p>
                    </div>

                    <div className="card">
                        <h3>2️⃣ Scoring Model</h3>
                        <p>Applies exponential decay over time.</p>
                    </div>

                    <div className="card">
                        <h3>3️⃣ Intelligent Forgetting</h3>
                        <p>Removes low-value memories dynamically.</p>
                    </div>

                    <div className="card">
                        <h3>4️⃣ Optimization</h3>
                        <p>Improves efficiency while keeping accuracy.</p>
                    </div>

                </div>
            </section>

            {/* ================= LIVE DEMO ================= */}
            <section className="live-demo">

                <h2>🚀 Live Memory Optimization Demo</h2>

                <div className="demo-box">

                    <div className="demo-card normal">
                        <h3>🤖 Normal AI</h3>
                        {/* <p className="big-number">100</p> */}
                        <p className="big-number">{demoData.normal || 100}</p>
                        <span>Total Memories</span>
                    </div>

                    <div className="demo-card forget">
                        <h3>🧠 ForgetAI</h3>
                        {/* <p className="big-number">62</p> */}
                        <p className="big-number">{demoData.forget || 62}</p>
                        <span>After Optimization</span>
                    </div>

                    <div className="demo-card efficiency">
                        <h3>⚡ Efficiency</h3>
                        {/* <p className="big-number">+38%</p> */}
                        <p className="big-number">
  {demoData.efficiency ? `+${demoData.efficiency}%` : "+38%"}
</p>
                        <span>Memory Reduced</span>
                    </div>

                </div>

            </section>

            {/* ================= CHAT CTA ================= */}
            <section className="chat-section">
                <h2>Talk to ForgetAI 🤖</h2>
                <p>Experience AI that evolves by forgetting</p>
                <button
                    className="primary-btn"
                    onClick={() => window.location.href = "/chat"}
                >
                    Start Chat
                </button>
            </section>

            {/* ================= GRAPH PREVIEW ================= */}
            <section className="dashboard-preview">
                <h2>AI Memory vs Time 📊</h2>
                <p>Watch how irrelevant data fades over time</p>

                <div className="graph-box">
                    <div className="bar" style={{ height: "80%" }}></div>
                    <div className="bar" style={{ height: "60%" }}></div>
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "25%" }}></div>
                    <div className="bar" style={{ height: "10%" }}></div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-brand">
                        <h2>ForgetAI</h2>
                        <p>Redefining Intelligence Through Forgetting</p>
                    </div>

                    <div className="footer-links">

                        <div>
                            <strong>Product</strong>
                            <span>Home</span>
                            <span>Chat</span>
                            <span>Dashboard</span>
                        </div>

                        <div>
                            <strong>Company</strong>
                            <span>About</span>
                            <span>Careers</span>
                            <span>Contact</span>
                        </div>

                        <div>
                            <strong>Resources</strong>
                            <span>Docs</span>
                            <span>Privacy</span>
                            <span>Terms</span>
                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    © 2026 ForgetAI. All rights reserved.
                </div>
            </footer>

            {/* ================= FAQ ================= */}
            <div className="faq-widget">

                <div
                    className="faq-button"
                    onClick={() => setOpenFAQ(!openFAQ)}
                >
                    ❓ FAQ
                </div>

                {openFAQ && (
                    <div className="faq-popup">

                        <h3>Quick Help</h3>

                        <div className="faq-item">
                            <strong>What is ForgetAI?</strong>
                            <p>AI that forgets irrelevant data.</p>
                        </div>

                        <div className="faq-item">
                            <strong>Why forgetting?</strong>
                            <p>Improves efficiency and reduces overload.</p>
                        </div>

                        <div className="faq-item">
                            <strong>How it works?</strong>
                            <p>Score = importance + usage + decay.</p>
                        </div>

                        <div className="faq-item">
                            <strong>Does it reduce accuracy?</strong>
                            <p>Very slightly, but efficiency improves a lot.</p>
                        </div>

                        <div className="faq-item">
                            <strong>Inspired by humans?</strong>
                            <p>Yes, based on human memory decay.</p>
                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Home;