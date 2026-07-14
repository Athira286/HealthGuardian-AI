import { loginWithGoogle } from "../services/authService";
function LandingPage() {
  return (
    <div className="container">

      <h1>HealthGuardian AI</h1>

      <h2>AI-Powered Rural Healthcare Supervision</h2>

      <p>
        Helping District Medical Officers monitor attendance,
        detect fraud, improve village coverage,
        and generate intelligent reports using AI agents.
      </p>

      <div className="buttons">
        <button onClick={loginWithGoogle}>
            Login
        </button>
        <button className="secondary">
          Learn More
        </button>
      </div>

      <div className="features">

        <div className="card">
          <h3>📍 GPS Attendance</h3>
          <p>Verify worker attendance using GPS.</p>
        </div>

        <div className="card">
          <h3>🤖 AI Agents</h3>
          <p>Detect fraud and generate insights.</p>
        </div>

        <div className="card">
          <h3>📊 Analytics</h3>
          <p>Visualize attendance and village coverage.</p>
        </div>

      </div>

    </div>
  );
}

export default LandingPage;