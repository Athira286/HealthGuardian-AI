import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";
function OfficerDashboard() {
  const [stats, setStats] = useState({
    checked_in: 0,
    villages: 0,
    alerts: []
  });
  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);

    };

    fetchStats();
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
    </div>
  );
}

export default OfficerDashboard;