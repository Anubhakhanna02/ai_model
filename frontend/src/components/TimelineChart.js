import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import API from "../api";

// ✅ Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TimelineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/memory/memory")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data.length) return <p>Loading timeline...</p>;

  // 🔥 Sort by time
  const sorted = [...data].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  const chartData = {
    labels: sorted.map((_, i) => `T${i + 1}`),

    datasets: [
      {
        label: "Memory Decay Over Time",
        data: sorted.map(item => item.score),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4
      }
    ]
  };

  return (
    <div>
      <h3>📈 Memory Timeline (Decay Visualization)</h3>
      <Line data={chartData} />
    </div>
  );
};

export default TimelineChart;