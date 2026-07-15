import { loginWithGoogle } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import WorkerDashboard from "./WorkerDashboard";
import OfficerDashboard from "./OfficerDashboard";

function LandingPage() {
  const { user, role } = useAuth();

  if (user) {
    if (role === "officer") {
        return <OfficerDashboard />;
    }

    return <WorkerDashboard />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#0f766e)",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}

        <div>

          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,.1)",
              padding: "8px 18px",
              borderRadius: "30px",
              color: "#fff",
              marginBottom: "25px",
              backdropFilter: "blur(10px)",
            }}
          >
            🚀 AI Powered Rural Healthcare Platform
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            HealthGuardian AI
          </h1>

          <p
            style={{
              color: "#dbeafe",
              fontSize: "22px",
              lineHeight: "1.8",
              maxWidth: "650px",
            }}
          >
            Smart attendance, AI supervision, live village monitoring,
            intelligent analytics and district-level decision support
            for rural healthcare.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={loginWithGoogle}
              style={{
                background: "#2563eb",
                color: "white",
                padding: "18px 38px",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Login with Google
            </button>

            <button
              style={{
                background: "rgba(255,255,255,.1)",
                color: "white",
                border: "1px solid rgba(255,255,255,.25)",
                padding: "18px 38px",
                borderRadius: "14px",
                fontSize: "18px",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div
          style={{
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(18px)",
            borderRadius: "24px",
            padding: "35px",
            border: "1px solid rgba(255,255,255,.15)",
          }}
        >
          <h2
            style={{
              color: "white",
              marginBottom: "30px",
            }}
          >
            Platform Highlights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            {[
              ["👨‍⚕️", "100+", "Health Workers"],
              ["🏥", "5", "PHCs"],
              ["📍", "20", "Villages"],
              ["🤖", "AI", "Supervisor"],
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,.08)",
                  borderRadius: "18px",
                  padding: "25px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "38px" }}>{item[0]}</div>

                <h2
                  style={{
                    color: "white",
                    margin: "15px 0 5px",
                  }}
                >
                  {item[1]}
                </h2>

                <p>{item[2]}</p>
              </div>
            ))}
          </div>

          <hr
            style={{
              margin: "35px 0",
              opacity: ".2",
            }}
          />

          <p
            style={{
              color: "#bfdbfe",
              lineHeight: "1.8",
            }}
          >
            ✔ Live Attendance Monitoring
            <br />
            ✔ AI Risk Detection
            <br />
            ✔ Smart Officer Dashboard
            <br />
            ✔ Interactive Village Maps
            <br />
            ✔ Gemini-powered AI Assistant
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;