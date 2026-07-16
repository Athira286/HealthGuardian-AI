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
    insights: [],
    phc_distribution: [],
  });

  const [briefing, setBriefing] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    fetchStats();

    fetch("https://healthguardian-ai-backend.onrender.com/briefing")
      .then((res) => res.json())
      .then((data) => setBriefing(data.briefing));
  }, []);

  return (
    <div className="page">
      <div className="container">

        <h1>🏥 District Command Center</h1>

        <hr />

        <h2 className="section-title">Today's Overview</h2>

        <div className="grid-2">

          <div className="card">
            <h3>100</h3>
            <p>Total Workers</p>
          </div>

          <div className="card">
            <h3>{stats.checked_in}</h3>
            <p>Checked In</p>
          </div>

          <div className="card">
            <h3>18</h3>
            <p>Absent</p>
          </div>

          <div className="card">
            <h3>{stats.villages}</h3>
            <p>Villages Covered</p>
          </div>

        </div>

        <hr />

        <h2 className="section-title">🧠 Morning AI Briefing</h2>

        <div
          className="card"
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "1.8",
          }}
        >
          {briefing}
        </div>

        <hr />

        <h2 className="section-title">🚨 AI Alerts</h2>

        <div className="card">
          <ul>
            {stats.alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>

        <hr />

        <h2 className="section-title">🤖 AI Insights</h2>

        <div className="card">
          <ul>
            {stats.insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>

        <hr />

        <h2 className="section-title">📊 Weekly Attendance</h2>

        <div className="card">
          <AttendanceChart />
        </div>

        <hr />

        <h2 className="section-title">🏥 PHC Attendance Distribution</h2>

        <div className="card">
          <PHCPieChart data={stats.phc_distribution} />
        </div>

        <hr />

        <h2 className="section-title">🗺️ PHC Coverage Map</h2>

        <div className="card">
          <VillageMap />
        </div>

      </div>
    </div>
  );
}

export default OfficerDashboard;