import { useAuth } from "../context/AuthContext";
import { checkIn } from "../services/attendanceService";

function WorkerDashboard() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>Health Worker Dashboard</h1>

      <h2>Welcome, {user?.displayName}</h2>

      <p>{user?.email}</p>

      <button onClick={() => checkIn(user)}>
        Check In
    </button>
    </div>
  );
}

export default WorkerDashboard;