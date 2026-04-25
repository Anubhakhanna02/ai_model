import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie, Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import API from "../api";

// ✅ REGISTER CHART COMPONENTS (VERY IMPORTANT)
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function MemoryChart() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/memory/stats")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!stats) return <p>Loading charts...</p>;

  // 🔹 PIE CHART DATA
  const pieData = {
    labels: ["Kept", "Forgotten"],
    datasets: [
      {
        data: [stats.kept, stats.removed],
        backgroundColor: ["#22c55e", "#ef4444"]
      }
    ]
  };

  // 🔹 LINE CHART DATA
  const lineData = {
    labels: stats.scores.map((_, i) => i + 1),
    datasets: [
      {
        label: "Memory Score",
        data: stats.scores,
        borderColor: "#38bdf8",
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>📊 Memory Analytics</h2>

      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ width: "300px" }}>
          <Pie data={pieData} />
        </div>
      

        <div style={{ width: "500px" }}>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}

export default MemoryChart;