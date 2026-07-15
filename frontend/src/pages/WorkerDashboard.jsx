import { useAuth } from "../context/AuthContext";
import { checkIn } from "../services/attendanceService";
import AIChat from "../components/AIChat";

function WorkerDashboard() {

    const { user } = useAuth();

    return (
  <div
    style={{
      minHeight: "100vh",
      background: "#0f172a",
      padding: "50px 0",
    }}
  >
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        👩‍⚕️ Health Worker Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <img
          src={user?.photoURL}
          alt=""
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            marginBottom: 20,
          }}
        />

        <h2>{user?.displayName}</h2>

        <p>{user?.email}</p>

        <button
          onClick={() => checkIn(user)}
          style={{
            marginTop: 25,
            padding: "14px 30px",
            borderRadius: "12px",
          }}
        >
            📍 Check In
        </button>
      </div>

      <div
        style={{
          marginTop: "70px",
        }}
      >
        <AIChat />
      </div>
    </div>
  </div>
);

}

export default WorkerDashboard;