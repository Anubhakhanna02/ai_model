import { useEffect, useState } from "react";
import API from "../api";
import "../styles/Experiment.css";

function Experiment() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/memory/experiment-details")
      .then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="experiment">
      <h2>🧪 Experiment Results</h2>

      <div className="exp-grid">
        <div className="exp-card">
          <h3>{data.total}</h3>
          <p>Total Data</p>
        </div>

        <div className="exp-card">
          <h3>{data.removed}</h3>
          <p>Removed</p>
        </div>

        <div className="exp-card">
          <h3>{data.efficiency}%</h3>
          <p>Efficiency</p>
        </div>

        <div className="exp-card">
          <h3>{data.avgScore}</h3>
          <p>Avg Score</p>
        </div>
      </div>
    </div>
  );
}

export default Experiment;