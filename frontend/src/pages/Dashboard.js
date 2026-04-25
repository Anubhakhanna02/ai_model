


import React, { useEffect, useState } from "react";
import MemoryCard from "../components/MemoryCard";
import MemoryChart from "../components/MemoryChart";
import ComparisonChart from "../components/ComparisonChart";
import TradeoffChart from "../components/TradeoffChart";
import TimelineChart from "../components/TimelineChart";
import API from "../api";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [memories, setMemories] = useState([]);
  const [stats, setStats] = useState(null);

  // 🔹 Fetch data from backend
  const fetchData = async () => {
    try {
      const memRes = await API.get("/memory/memory");
      const statsRes = await API.get("/memory/stats");

      setMemories(memRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">

      {/* 🔥 TITLE */}
      <h2 className="title">🧠 Memory Dashboard</h2>

      {/* ============================== */}
      {/* 🔥 STATS CARDS */}
      {/* ============================== */}
      {stats && (
        <div className="stats-grid">
          <div className="card">
            <h3>{stats.total}</h3>
            <p>Total Data</p>
          </div>

          <div className="card">
            <h3>{stats.kept}</h3>
            <p>Active Memory</p>
          </div>

          <div className="card">
            <h3>{stats.removed}</h3>
            <p>Forgotten</p>
          </div>
        </div>
      )}

      {/* ============================== */}
      {/* 🔥 CHARTS SECTION */}
      {/* ============================== */}
      <div className="chart-grid">

        <div className="chart-card">
          <MemoryChart />
        </div>

        <div className="chart-card">
          <ComparisonChart />
        </div>

        <div className="chart-card">
          <TradeoffChart />
        </div>

          <div className="chart-card">
  <TimelineChart />
</div>

      </div>

      {/* ============================== */}
      {/* 🔥 MEMORY LIST */}
      {/* ============================== */}
      <div className="memory-section">
        <h3>🧠 Stored Memories</h3>

        {memories.length === 0 ? (
          <p>No memory available</p>
        ) : (
          memories.map(mem => (
            <MemoryCard key={mem._id} memory={mem} />
          ))
        )}
      </div>

    </div>
  );
};

export default Dashboard;