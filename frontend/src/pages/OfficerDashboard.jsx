import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";
import AttendanceChart from "../components/AttendanceChart";
import PHCPieChart from "../components/PHCPieChart";
import VillageMap from "../components/VillageMap";

function OfficerDashboard() {
  const [stats, setStats] = useState({
    checked_in: 0,
    villages: 0,
    alerts: [],
    phc_distribution: []
  });

  const [briefing, setBriefing] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    fetchStats();

    fetch("http://127.0.0.1:8000/briefing")
      .then((res) => res.json())
      .then((data) => setBriefing(data.briefing));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>🏥 District Medical Officer Dashboard</h1>

      <hr />

      <h2>Today's Overview</h2>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <div>
          <h3>100</h3>
          <p>Total Workers</p>
        </div>

        <div>
          <h3>{stats.checked_in}</h3>
          <p>Checked In</p>
        </div>

        <div>
          <h3>18</h3>
          <p>Absent</p>
        </div>

        <div>
          <h3>{stats.villages}</h3>
          <p>Villages Covered</p>
        </div>
      </div>

      <hr />

      <h2>🧠 Morning AI Briefing</h2>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontFamily: "inherit",
          fontSize: "18px",
          border: "1px solid #444",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#1f1f1f",
        }}
      >
        {briefing}
      </pre>

      <hr />

      <h2>🚨 AI Alerts</h2>

      <ul>
        {stats.alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>

      <hr />

      <h2>🤖 AI Insights</h2>

      <ul>
        <li>Attendance increased by 8% this week.</li>
        <li>Best performing PHC: Chromepet.</li>
        <li>Recommend assigning one worker to Village 9.</li>
      </ul>

      <hr />

      <h2>📊 Weekly Attendance</h2>

      <AttendanceChart />

      <hr />

      <h2>🏥 PHC Attendance Distribution</h2>

      <PHCPieChart data={stats.phc_distribution} />

      <hr />

      <h2>🗺️ PHC Coverage Map</h2>

      <VillageMap />
    </div>
  );
}

export default OfficerDashboard;