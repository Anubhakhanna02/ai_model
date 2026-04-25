import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import API from "../api";

function TradeoffChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/memory/tradeoff")
      .then(res => setData(res.data));
  }, []);

  if (!data.length) return <p>Loading...</p>;

  const chartData = {
    labels: data.map(d => d.threshold),
    datasets: [
      {
        label: "Memory Size",
        data: data.map(d => d.memory),
        borderColor: "#22c55e"
      },
      {
        label: "Accuracy",
        data: data.map(d => d.accuracy),
        borderColor: "#3b82f6"
      }
    ]
  };

  return (
    <div style={{ width: "600px" }}>
      <h3>📈 Accuracy vs Memory Tradeoff</h3>
      <Line data={chartData} />
    </div>
  );
}

export default TradeoffChart;