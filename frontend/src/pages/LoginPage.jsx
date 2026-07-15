import { loginWithGoogle } from "../services/authService";

function LoginPage() {
  return (
    <div className="page">
      <div className="container">

        <div className="card" style={{maxWidth:"520px",margin:"80px auto"}}>

          <h1>🏥 HealthGuardian AI</h1>

          <p style={{marginBottom:"30px"}}>
            AI-powered rural healthcare monitoring platform for
            District Medical Officers and Health Workers.
          </p>

          <button
            className="primary-btn"
            onClick={loginWithGoogle}
            style={{width:"100%"}}
          >
            Continue with Google
          </button>

        </div>

      </div>
    </div>
  );
}

export default LoginPage;