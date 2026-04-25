import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import API from "../api";

// ✅ REGISTER
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ComparisonChart() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/memory/compare")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading comparison...</p>;

  const chartData = {
    labels: ["Normal AI", "Forgetting AI"],
    datasets: [
      {
        label: "Memory Size",
        data: [data.normalAI_size, data.forgettingAI_size],
        backgroundColor: ["#3b82f6", "#22c55e"]
      }
    ]
  };

  return (
    <div>
      <h2>⚡ AI Comparison</h2>

      <div style={{ width: "500px" }}>
        <Bar data={chartData} />
      </div>

      <p style={{ marginTop: "10px" }}>
        🚀 Efficiency Improvement: {data.improvement.toFixed(2)}%
      </p>
    </div>
  );
}

export default ComparisonChart;