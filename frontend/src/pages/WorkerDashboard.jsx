import { useAuth } from "../context/AuthContext";
import { checkIn } from "../services/attendanceService";
import { askAI } from "../services/aiService";
import AIChat from "../components/AIChat";

function WorkerDashboard() {
  const { user } = useAuth();

  const testAI = async () => {
  const response = await askAI("Hello Backend!");

  alert(response);};

  return (
    <div className="container">
      <h1>Health Worker Dashboard</h1>

      <h2>Welcome, {user?.displayName}</h2>

      <p>{user?.email}</p>

      <button onClick={() => checkIn(user)}>
        Check In
      </button>
      <button onClick={testAI}>
        Ask HealthGuardian AI
      </button>
    <AIChat />
    </div>
  );
}

export default WorkerDashboard;
