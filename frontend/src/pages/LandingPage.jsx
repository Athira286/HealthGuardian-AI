import { loginWithGoogle } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import WorkerDashboard from "./WorkerDashboard";

function LandingPage() {
  const { user, logout } = useAuth();

  if (user) {
  return <WorkerDashboard />;}

  return (
    <div className="container">
      <h1>HealthGuardian AI</h1>

      <h2>AI-Powered Rural Healthcare Supervision</h2>

      <p>
        Helping District Medical Officers monitor attendance,
        detect fraud, improve village coverage,
        and generate intelligent reports using AI agents.
      </p>

      <button onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}

export default LandingPage;